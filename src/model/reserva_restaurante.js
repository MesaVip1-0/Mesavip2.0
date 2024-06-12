const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reserva_restaurante =  new Schema({
    dh_reserva: Date,
    qtd_pessoas: Number,
    num_mesa: Number,
    dh_inclusao: Date,
    dh_alteracao: Date,
    restaurante_reserva_restaurante_id: Number,
    cliente_reserva_restaurante_id: Number,
    
});      

module.exports = mongoose.model('Reserva_restaurante' , reserva_restaurante);