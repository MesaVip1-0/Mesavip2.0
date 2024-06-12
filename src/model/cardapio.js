const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardapio =  new Schema({
    
    link_cardapio: String,
    dh_inclusao: Date,
    dh_alteracao: Date,
    restaurante_id: Number
        
});      

module.exports = mongoose.model('Cardapio' , cardapio);