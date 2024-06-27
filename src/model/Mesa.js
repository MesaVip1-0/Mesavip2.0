//
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MesaSchema = new Schema({
    numero: {
        type: Number,
        required: true
    },
    nmrLugares: {
        type: Number,
        required: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rest',
        required: true
    },
    tipo: {
        type: String,
        enum: ['interna', 'externa'],
        required: true
    }
});

module.exports = mongoose.model('Mesa', MesaSchema);
