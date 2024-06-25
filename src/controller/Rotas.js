//Rotas.js

require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
const upload = require('../config/multer')

// Models
const User = require('../model/User');
const Rest = require('../model/Rest');
const Reserva = require('../model/Reserva');
const Mesa = require('../model/Mesa');

const router = express.Router();
router.use(cors()); // Habilitando o CORS

// Open Route - Public Route
router.get('/', (req, res) => {
    res.status(200).json({ msg: 'Bem vindo a nossa API' });
});

// VALIDAÇÃO DE TOKEN
function checkToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: "Acesso negado!" });
    }

    try {
        const secret = process.env.SECRET;
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ msg: 'Token inválido' });
    }
}

// Rota privada
router.get('/user/:id', checkToken, async (req, res) => {
    const id = req.params.id;

    // check if user exists
    const user = await User.findById(id, '-pass');

    if (!user) {
        return res.status(404).json({ msg: "Usuário não encontrado" });
    }
    res.status(200).json({ user });
});

// Registro Restaurante
router.post('/auth/register_rest', async (req, res) => {
    const { name, email, cnpj, cep, pass, categoria, confirmPass, cidade, bairro, rua, numero } = req.body;

    if (pass !== confirmPass) {
        return res.status(400).json({ error: 'Senhas não conferem' });
    }

    const userExists = await Rest.findOne({ email: email });
    if (userExists) {
        return res.status(422).json({ msg: "Por favor, utilize outro e-mail" });
    }

    // Validação do CEP
    try {
        const fetch = await import('node-fetch');
        const response = await fetch.default(`https://brasilapi.com.br/api/cep/v1/${cep}`);
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Erro na resposta do CEP API:", errorText);
            throw new Error('CEP inválido');
        }
        const data = await response.json();
        if (!data.cep) {
            return res.status(400).json({ msg: "CEP inválido" });
        }
    } catch (error) {
        console.error("Erro ao validar CEP:", error);
        return res.status(400).json({ msg: "CEP inválido" });
    }

    const salt = await bcrypt.genSalt(12);
    const passHash = await bcrypt.hash(pass, salt);

    const newRestaurant = new Rest({
        name,
        email,
        cnpj,
        cep,
        categoria,
        pass: passHash,
        cidade,
        bairro,
        rua,
        numero
    });

    try {
        await newRestaurant.save();
        res.status(201).json({ msg: "Restaurante cadastrado com sucesso" });
    } catch (e) {
        res.status(500).json({ msg: "Ocorreu um erro no servidor, tente novamente mais tarde", e });
    }
})

// Register
router.post('/auth/register', async (req, res) => {
    const { name, email, pass, confirmPass } = req.body;

    // Validação
    if (!name || !email || !pass || !confirmPass) {
        return res.status(422).json({ msg: 'Preencha todos os campos' });
    }
    if (pass !== confirmPass) {
        return res.status(422).json({ msg: "As senhas não conferem" });
    }

    // Checando existência de usuário
    const userExists = await User.findOne({ email: email });
    if (userExists) {
        return res.status(422).json({ msg: "Por favor, utilize outro e-mail" });
    }

    // Criando senha
    const salt = await bcrypt.genSalt(12);
    const passHash = await bcrypt.hash(pass, salt);

    // Criar Usuário
    const user = new User({
        name,
        email,
        pass: passHash
    });

    try {
        await user.save();
        res.status(201).json({ msg: "Usuário criado com sucesso" });

    } catch (e) {
        res.status(500).json({ msg: "Ocorreu um erro no servidor, tente novamente mais tarde", e });
    }
});

// Login User
router.post("/auth/login", async (req, res) => {
    const { email, pass } = req.body;

    // Validação
    if (!email || !pass) {
        return res.status(422).json({ msg: 'O email e a senha são obrigatórios' });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(404).json({ msg: 'Usuário não existe' });
    }

    // Check de senha
    const checkPass = await bcrypt.compare(pass, user.pass);

    if (!checkPass) {
        res.status(422).json({ msg: "Senha incorreta" });
        return;
    }

    try {
        const secret = process.env.SECRET;
        const token = jwt.sign({
            id: user._id
        }, secret);
        res.status(200).json({ msg: "Autenticação realizada com sucesso", token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Ocorreu um erro no servidor", err });
    }
});

//Login Rest
router.post("/auth/login_rest", async (req, res) => {
    const { email, pass } = req.body;

    // Validação
    if (!email || !pass) {
        return res.status(422).json({ msg: 'O email e a senha são obrigatórios' });
    }

    try {
        // Busca pelo restaurante no banco de dados
        const rest = await Rest.findOne({ email: email }); // Certifique-se de usar 'Rest' e não 'newRestaurant'
        if (!rest) {
            return res.status(404).json({ msg: 'Usuário não existe' });
        }

        // Verificação de senha
        const checkPass = await bcrypt.compare(pass, rest.pass);
        if (!checkPass) {
            return res.status(422).json({ msg: "Senha incorreta" });
        }

        // Geração do token JWT
        const secret = process.env.SECRET;
        const token = jwt.sign({ id: rest._id }, secret, { expiresIn: '1h' }); // Token expira em 1 hora

        return res.status(200).json({ msg: "Autenticação realizada com sucesso", token });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Ocorreu um erro no servidor", err });
    }
});

// Rota para fazer uma reserva
router.post('/reserva', checkToken, async (req, res) => {
    const { mesaId, date, time } = req.body;
    const userId = req.user.id;

    try {
        // Verificar se o cliente existe
        const client = await User.findById(userId);
        if (!client) {
            return res.status(404).json({ msg: 'Cliente não encontrado' });
        }

        // Verificar se a mesa existe
        const mesa = await Mesa.findById(mesaId);
        if (!mesa) {
            return res.status(404).json({ msg: 'Mesa não encontrada' });
        }

        // Verificar se a mesa está disponível no horário e data desejados
        const reservaExistente = await Reserva.findOne({
            mesaId,
            date,
            time
        });

        if (reservaExistente) {
            return res.status(400).json({ msg: 'Mesa já reservada para o horário e data especificados' });
        }

        // Criar a nova reserva
        const newReserva = new Reserva({
            userId,
            mesaId,
            date,
            time
        });

        // Salvar a reserva no banco de dados
        await newReserva.save();

        res.status(201).json({ msg: 'Reserva criada com sucesso', reserva: newReserva });
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao criar a reserva', error });
    }
});

// Rota para criar mesas
router.post('/restaurante/:restId/mesas', [
    checkToken,
    body('nmrLugares').isInt({ min: 1 }).withMessage('O número de lugares deve ser um inteiro positivo'),
    body('tipo').isIn(['interna', 'externa']).withMessage('O tipo deve ser "interna" ou "externa"'),
    body('quantidade').isInt({ min: 1 }).withMessage('A quantidade de mesas deve ser um inteiro positivo')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { restId } = req.params;
    const { nmrLugares, tipo, quantidade } = req.body;

    try {
        const restaurant = await Rest.findById(restId);
        if (!restaurant) {
            return res.status(404).json({ msg: 'Restaurante não encontrado' });
        }

        const lastMesa = await Mesa.findOne({ restaurant: restId }).sort({ numero: -1 });
        const lastNumero = lastMesa ? lastMesa.numero : 0;

        const mesas = [];
        for (let i = 1; i <= quantidade; i++) {
            const newMesa = new Mesa({
                numero: lastNumero + i,
                nmrLugares,
                restaurant: restId,
                tipo
            });
            await newMesa.save();
            mesas.push(newMesa);
        }

        res.status(201).json({ msg: 'Mesas criadas com sucesso', mesas });
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao criar mesas', error });
    }
});

// Rota para atualizar informações de uma mesa
router.put('/restaurante/:restId/mesas/:mesaId', [
    checkToken,
    body('nmrLugares').optional().isInt({ min: 1 }).withMessage('O número de lugares deve ser um inteiro positivo'),
    body('tipo').optional().isIn(['interna', 'externa']).withMessage('O tipo deve ser "interna" ou "externa"')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { restId, mesaId } = req.params;
    const { nmrLugares, tipo } = req.body;

    try {
        // Verificar se o restaurante existe
        const restaurant = await Rest.findById(restId);
        if (!restaurant) {
            return res.status(404).json({ msg: 'Restaurante não encontrado' });
        }

        // Verificar se a mesa existe e pertence ao restaurante
        let mesa = await Mesa.findById(mesaId);
        if (!mesa || mesa.restaurant.toString() !== restId) {
            return res.status(404).json({ msg: 'Mesa não encontrada no restaurante especificado' });
        }

        // Atualizar a mesa
        if (nmrLugares) mesa.nmrLugares = nmrLugares;
        if (tipo) mesa.tipo = tipo;

        // Salvar as alterações
        await mesa.save();

        res.status(200).json({ msg: 'Mesa atualizada com sucesso', mesa });
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao atualizar a mesa', error });
    }
});

// Rota para obter todos os restaurantes
router.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await Rest.find().select('name cidade bairro rua numero'); // Adicione os campos de endereço aqui
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao buscar os restaurantes', error });
    }
});


//Rota das imagens do restaurante
router.post('/img', upload.single('file'), async (req, res) => {
    try {

        const {name} = req.body

        const file = req.file

        const rest = new Rest({
            src: file.path,
        });

        await rest.save()

        res.json({rest, msg:'Imagem salva com sucesso!!!'});


    } catch (error) {
        res.status(500).json({message:'Erro ao salvar imagem.'});
    }
});

module.exports = router;
