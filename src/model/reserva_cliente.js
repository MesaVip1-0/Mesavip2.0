const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reserva_cliente =  new Schema({
    dh_reserva: Date,
    qtd_pessoas: Number,
    num_mesa: Number,
    dh_inclusao: Date,
    dh_alteracao: Date,
    tipo_reserva_id: Number, 
    cliente_reserva_cliente_id: Number,
    restaurante_reserva_cliente_id: Number
    
});      

module.exports = mongoose.model('Reserva_cliente' , reserva_cliente);