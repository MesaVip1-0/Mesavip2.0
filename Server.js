require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./src/controller/Rotas'); // Importando o arquivo de rotas

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
