//Rotas.js
require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { body, validationResult } = require('express-validator');

// Models
const User = require('../model/User');
const Rest = require('../model/Rest');
const Reserva = require('../model/Reserva');
const Mesa = require('../model/Mesa');
const upload = require('../config/multer')

const router = express.Router();
router.use(cors()); // Habilitando o CORS

// Open Route - Public Route
router.get('/', (req, res) => {
    res.status(200).json({ msg: 'Bem vindo a nossa API' });
});

// // Rota para criar novas mesas
// router.post('/:restauranteId/mesas', checkToken, async (req, res) => {
//     const { restauranteId } = req.params;
//     const { numeroInicial, quantidade, nmrLugares, tipo } = req.body;

//     try {
//         // Encontrar o restaurante
//         const restaurante = await Rest.findById(restauranteId);
//         if (!restaurante) {
//             return res.status(404).json({ msg: 'Restaurante não encontrado' });
//         }

//         // Criar as mesas
//         const mesas = [];
//         for (let i = numeroInicial; i <= quantidade; i++) {
//             const novaMesa = new Mesa({
//                 numero: i,
//                 nmrLugares,
//                 restaurant: restauranteId,
//                 tipo
//             });

//             // Salvar a mesa no banco de dados
//             await novaMesa.save();
//             mesas.push(novaMesa);
//         }

//         // Adicionar as mesas ao restaurante
//         restaurante.mesas = restaurante.mesas.concat(mesas.map(mesa => mesa._id));
//         await restaurante.save();

//         res.status(201).json({ msg: 'Mesas criadas com sucesso', mesas });
//     } catch (error) {
//         res.status(500).json({ msg: 'Erro ao criar as mesas', error });
//     }
// });


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
    const {
        name, email, cnpj, cep, pass, categoria, confirmPass,
        cidade, bairro, rua, numero, horariosFuncionamento
    } = req.body;

    if (pass !== confirmPass) {
        return res.status(400).json({ error: 'Senhas não conferem' });
    }

    const userExists = await Rest.findOne({ email: email });
    if (userExists) {
        return res.status(422).json({ msg: "Por favor, utilize outro e-mail" });
    }

    // Validação do CEP
    try {
        const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
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
        desc: "Descrição",
        email,
        cnpj,
        cep,
        categoria,
        pass: passHash,
        cidade,
        bairro,
        rua,
        numero,
        wifi: false,  // Valor padrão false para wifi
        estacionamento: false,  // Valor padrão false para estacionamento
        arCondicionado: false,  // Valor padrão false para ar condicionado
        areaExterna: false,  // Valor padrão false para área externa
        horariosFuncionamento
    });

    try {
        await newRestaurant.save();
        res.status(201).json({ msg: "Restaurante cadastrado com sucesso" });
    } catch (e) {
        res.status(500).json({ msg: "Ocorreu um erro no servidor, tente novamente mais tarde", e });
    }
});
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

        // Armazena o id do restaurante em uma variável
        var restId = rest._id;

        // Geração do token JWT
        const secret = process.env.SECRET;
        const token = jwt.sign({ id: restId }, secret, { expiresIn: '1h' }); // Token expira em 1 hora
        //console.log('ID do restaurante logado:', restId);
        return res.status(200).json({ msg: "Autenticação realizada com sucesso", token, restId });
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

        // Verificar se o restaurante existe
        const restaurant = await Rest.findById(mesa.restaurant);
        if (!restaurant) {
            return res.status(404).json({ msg: 'Restaurante não encontrado' });
        }

        // Verificar se a mesa está disponível no horário e data desejados
        const reservaExistente = await Reserva.findOne({
            mesa: mesaId,
            date,
            time
        });

        if (reservaExistente) {
            return res.status(400).json({ msg: 'Mesa já reservada para o horário e data especificados' });
        }

        // Criar a nova reserva
        const newReserva = new Reserva({
            user: userId,
            mesa: mesaId,
            restaurant: restaurant._id,
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


//Rota para buscar informações das mesas
router.get('/restaurante/:restId/mesas', checkToken, async (req, res) => {
    const { restId } = req.params;

    try {
        const restaurant = await Rest.findById(restId).populate('mesas');
        if (!restaurant) {
            return res.status(404).json({ msg: 'Restaurante não encontrado' });
        }

        res.status(200).json({ mesas: restaurant.mesas });
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao buscar mesas', error });
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
        const restaurants = await Rest.find().select('name cidade bairro rua numero categoria'); // Adicione os campos de endereço aqui
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ msg: 'Erro ao buscar os restaurantes', error });
    }
});

///////////////////////////////////////////////////////////////////////////////////////////
// Rota para buscar informações do restaurante
router.get('/restaurante/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const restaurante = await Rest.findById(id);
        if (!restaurante) {
            return res.status(404).json({ error: 'Restaurante não encontrado' });
        }

        res.status(200).json(restaurante);
    } catch (error) {
        console.error('Erro ao buscar restaurante:', error);
        res.status(500).json({ error: 'Erro ao buscar restaurante, verifique o console para mais detalhes' });
    }
});


router.put('/restaurante/:id', async (req, res) => {
    const { id } = req.params;
    const {
        name,
        desc,
        wifi,
        estacionamento,
        arCondicionado,
        areaExterna,
        horariosFuncionamento,
        categoria
    } = req.body;

    try {
        // Verifica se o restaurante existe
        let restaurante = await Rest.findById(id);
        if (!restaurante) {
            return res.status(404).json({ error: 'Restaurante não encontrado' });
        }

        // Atualiza os campos conforme necessário
        if (name !== undefined) restaurante.name = name;
        if (desc !== undefined) restaurante.desc = desc;
        if (wifi !== undefined) restaurante.wifi = wifi;
        if (estacionamento !== undefined) restaurante.estacionamento = estacionamento;
        if (arCondicionado !== undefined) restaurante.arCondicionado = arCondicionado;
        if (areaExterna !== undefined) restaurante.areaExterna = areaExterna;
        if (categoria !== undefined) restaurante.categoria = categoria; // Atualiza a categoria

        // Atualiza os horários de funcionamento, se fornecidos
        if (Array.isArray(horariosFuncionamento) && horariosFuncionamento.length > 0) {
            restaurante.horariosFuncionamento = horariosFuncionamento.map(horario => ({
                diaSemana: horario.diaSemana,
                horarioAbertura: horario.horarioAbertura,
                horarioFechamento: horario.horarioFechamento
            }));
        }

        // Salva as alterações no banco de dados
        await restaurante.save();

        // Responde com sucesso
        res.status(200).json({ message: 'Restaurante atualizado com sucesso', restaurante });
    } catch (error) {
        console.error('Erro ao atualizar restaurante:', error);
        res.status(500).json({ error: 'Erro ao atualizar restaurante, verifique o console para mais detalhes' });
    }
});

 //Rota das imagens do restaurante
router.post('/image', upload.single('file'), async (req, res) => {
    try {

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

// //Rota das imagens que ja estão no banco
    router.get('/image', async (req, res) => {
    try {

        const rest = await Rest.find()

        res.json({rest, msg:'Imagem salva com sucesso!!!'});


    } catch (error) {
        res.status(500).json({message:'Erro ao salvar imagem.'});
    }
});
module.exports = router;
