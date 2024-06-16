const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DetailsCli = new Schema({
    descricao: String,
    dh_inclusao: Date,    
    dh_alteracao: Date

});

module.exports = mongoose.model('Servicos' , DetailsCli);