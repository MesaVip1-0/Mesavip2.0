const mongoose = require('mongoose');
const HorarioFuncionamentoSchema = require('./HorarioFuncioname');

const RestSchema = new mongoose.Schema({
    name: String,
    src: String, 
    email: String,
    cep: String,
    cnpj: String,
    categoria: String,
    pass: String,
    cidade: String,
    bairro: String,
    rua: String,
    numero: String,
    mesas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mesa'
    }],
    wifi: { type: Boolean, default: false },
    estacionamento: { type: Boolean, default: false },
    arCondicionado: { type: Boolean, default: false },
    areaExterna: { type: Boolean, default: false },
    horariosFuncionamento: [HorarioFuncionamentoSchema],
    categoria: String
});

module.exports = mongoose.model('Rest', RestSchema);
    