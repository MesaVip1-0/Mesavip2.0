//model/Reserva.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservaSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    mesa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mesa',
        required: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rest',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

const Reserva = mongoose.model('Reserva', ReservaSchema);

module.exports = Reserva;
