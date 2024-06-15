require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./src/controller/Rotas');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

// Usando as rotas importadas
app.use('/', router);

// Credenciais
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.bo7gooi.mongodb.net/TesteLogin?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000");
        });
        console.log("BD conectado");
    })
    .catch((e) => {
        console.error("Erro ao conectar no servidor", e);
    });

// Configuração do multer e GridFS
const storage = new GridFsStorage({
    url: `mongodb+srv://${dbUser}:${dbPass}@cluster0.bo7gooi.mongodb.net/TesteLogin?retryWrites=true&w=majority&appName=Cluster0`,
    file: (req, file) => {
        return {
            bucketName: 'uploads', // coleção onde os arquivos serão armazenados
            filename: `${Date.now()}-${file.originalname}`
        };
    }
});

const upload = multer({ storage });

// Rota para upload de arquivos
app.post('/upload', upload.single('file'), (req, res) => {
    res.status(201).send('Arquivo carregado com sucesso');
});

