const mongoose = require('mongoose');

const HorarioFuncionamentoSchema = new mongoose.Schema({
    diaSemana: String,
    horarioAbertura: String,
    horarioFechamento: String
});

module.exports = HorarioFuncionamentoSchema;