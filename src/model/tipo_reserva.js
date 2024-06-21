const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipo_reserva = new Schema({
    descricao: String,
    dh_inclusao: Date,
    dh_alteracao: Date

});

module.exports = mongoose.model('Tipo_reserva' , tipo_reserva);