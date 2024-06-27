const mongoose = require('mongoose');

const HomeCliSchema = new mongoose.Schema({
    codigo_categoria: String,
    name_Rest: String,
    imagem_Rest: Buffer,
    descricao_Rest: String
});

const HomeCli = mongoose.model('HomeCli', HomeCliSchema);

module.exports = HomeCli;
