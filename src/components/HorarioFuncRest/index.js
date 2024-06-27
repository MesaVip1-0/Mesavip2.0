import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';

const HorarioFuncRest = ({ title, betweenText, onTimeChange }) => {

    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleBlur = (text, setTime) => {
        if (text.length === 2) {
            const hour = parseInt(text, 10);
            if (hour > 23) {
                Alert.alert(
                    'Horário inválido',
                    `Horário inválido: ${text}`,
                    [{ text: 'OK', onPress: () => setTime('') }]
                );
            } else {
                setTime(`${text}:00`);
            }
        }
    };

    const handleStartTimeChange = (text) => {
        setStartTime(text);
        if (text.length === 5) {
            const isValidTime = /^([01][0-9]|2[0-3]):([0-5][0-9])$/.test(text);
            if (!isValidTime) {
                Alert.alert(
                    'Horário inválido',
                    `Horário inválido: ${text}`,
                    [{ text: 'OK', onPress: () => setStartTime('') }]
                );
            } else {
                onTimeChange(title, 'start', text);
            }
        }
    };

    const handleEndTimeChange = (text) => {
        setEndTime(text);
        if (text.length === 5) {
            const isValidTime = /^([01][0-9]|2[0-3]):([0-5][0-9])$/.test(text);
            if (!isValidTime) {
                Alert.alert(
                    'Horário inválido',
                    `Horário inválido: ${text}`,
                    [{ text: 'OK', onPress: () => setEndTime('') }]
                );
            } else {
                onTimeChange(title, 'end', text);
            }
        }
    };


    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.horarioContainer}>
                <Text style={styles.horarioButtonText}>{title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.horarioText}>{betweenText}</Text>
                </View>

                <View style={styles.horarioInputContainer}>
                    <View style={styles.horario}>
                        <TextInputMask
                            style={styles.horarioText}
                            type={'datetime'}
                            options={{
                                format: 'HH:mm'
                            }}
                            value={startTime}
                            onChangeText={handleStartTimeChange}

                            onBlur={() => handleBlur(startTime, setStartTime)}
                        />
                    </View>
                    <Text style={styles.horarioText}>à</Text>
                    <View style={styles.horario}>
                        <TextInputMask
                            style={styles.horarioText}
                            type={'datetime'}
                            options={{
                                format: 'HH:mm'
                            }}
                            value={endTime}
                            onChangeText={handleEndTimeChange}

                            onBlur={() => handleBlur(endTime, setEndTime)}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HorarioFuncRest;

