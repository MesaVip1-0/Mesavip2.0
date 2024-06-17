const mongoose = require('mongoose');

const MesaSchema = new mongoose.Schema({
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
    }
});

MesaSchema.index({ numero: 1, restaurant: 1 }, { unique: true });

const Mesa = mongoose.model('Mesa', MesaSchema);

module.exports = Mesa;
