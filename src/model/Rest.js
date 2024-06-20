//Rest.js

const mongoose = require('mongoose');

const RestSchema = new mongoose.Schema({
    name: String,
    email: String,
    cep: String,
    cnpj: String,
    categoria:String,
    pass: String,
    cidade: String,
    bairro: String,
    rua: String,
    numero: String,
    mesas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mesa'
    }]
});

const Rest = mongoose.model('Rest', RestSchema);

module.exports = Rest;
