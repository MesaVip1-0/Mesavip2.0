const express = require('express');
const router = express.Router();
const Rest = require('../models/Rest');

// Rota para atualizar informações do restaurante
router.put('/restaurante/:id', async (req, res) => {
    const { id } = req.params;
    const {
        name,
        desc,
        wifi,
        estacionamento,
        arCondicionado,
        areaExterna,
        horariosFuncionamento
    } = req.body;

    try {
        // Verifica se o restaurante existe
        let restaurante = await Rest.findById(id);
        if (!restaurante) {
            return res.status(404).json({ error: 'Restaurante não encontrado' });
        }

        // Atualiza os campos conforme necessário
        if (name !== undefined) restaurante.name = name;
        if (desc !== undefined) restaurante.desc = desc;
        if (wifi !== undefined) restaurante.wifi = wifi;
        if (estacionamento !== undefined) restaurante.estacionamento = estacionamento;
        if (arCondicionado !== undefined) restaurante.arCondicionado = arCondicionado;
        if (areaExterna !== undefined) restaurante.areaExterna = areaExterna;

        // Atualiza os horários de funcionamento, se fornecidos
        if (Array.isArray(horariosFuncionamento) && horariosFuncionamento.length > 0) {
            restaurante.horariosFuncionamento = horariosFuncionamento.map(horario => ({
                diaSemana: horario.diaSemana,
                horarioAbertura: horario.horarioAbertura,
                horarioFechamento: horario.horarioFechamento
            }));
        }

        // Salva as alterações no banco de dados
        await restaurante.save();

        // Responde com sucesso
        res.status(200).json({ message: 'Restaurante atualizado com sucesso', restaurante });
    } catch (error) {
        console.error('Erro ao atualizar restaurante:', error);
        res.status(500).json({ error: 'Erro ao atualizar restaurante, verifique o console para mais detalhes' });
    }
});

module.exports = router;
