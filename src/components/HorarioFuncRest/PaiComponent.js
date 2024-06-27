//PaiComponent.js

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import HorarioFuncRest from '../../components/HorarioFuncRest';
import styles from './styles';
import axios from 'axios';
import { IP } from '../../pages/IP';

const MainComponent = ({ setHorariosFuncionamento }) => {
    const [horarios, setHorarios] = useState({
        Segunda: { start: '', end: '' },
        Domingo: { start: '', end: '' }
    });

    const handleTimeChange = (day, type, time) => {
        setHorarios((prevHorarios) => ({
            ...prevHorarios,
            [day]: {
                ...prevHorarios[day],
                [type]: time
            }
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`http://${IP}:3000/restaurante/667898d32266f3ab70f8877b`, {
                horariosFuncionamento: [
                    { diaSemana: 'Segunda', horarioAbertura: horarios.Segunda.start, horarioFechamento: horarios.Segunda.end },
                    { diaSemana: 'Domingo', horarioAbertura: horarios.Domingo.start, horarioFechamento: horarios.Domingo.end }
                ]
            });
            setHorariosFuncionamento([
                { diaSemana: 'Segunda', horarioAbertura: horarios.Segunda.start, horarioFechamento: horarios.Segunda.end },
                { diaSemana: 'Domingo', horarioAbertura: horarios.Domingo.start, horarioFechamento: horarios.Domingo.end }
            ]);
            Alert.alert('Sucesso', 'Horários atualizados com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar horários:', error);
            Alert.alert('Erro', 'Erro ao atualizar horários');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <HorarioFuncRest title="Segunda a sexta" betweenText="    " onTimeChange={handleTimeChange} />
            <HorarioFuncRest title="Sábado e Domingo" betweenText="" onTimeChange={handleTimeChange} />
            <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MainComponent;
