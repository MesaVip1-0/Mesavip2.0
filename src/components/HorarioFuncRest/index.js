import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const HorarioFuncRest = ({ onRemove, title, betweenText }) => {
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

    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.horarioContainer}>
                <Text style={styles.horarioButtonText}>{title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.horarioText}>{betweenText}</Text>
                    <Text style={styles.horarioButtonText}>Domingo</Text>
                </View>
                <Text style={styles.horarioText}>:</Text>
                <View style={styles.horarioInputContainer}>
                    <View style={styles.horario}>
                        <TextInputMask
                            style={styles.horarioText}
                            type={'datetime'}
                            options={{
                                format: 'HH:mm'
                            }}
                            value={startTime}
                            onChangeText={(text) => {
                                setStartTime(text);
                                if (text.length === 5) {
                                    const isValidTime = /^([01][0-9]|2[0-3]):([0-5][0-9])$/.test(text);
                                    if (!isValidTime) {
                                        Alert.alert(
                                            'Horário inválido',
                                            `Horário inválido: ${text}`,
                                            [{ text: 'OK', onPress: () => setStartTime('') }]
                                        );
                                    }
                                }
                            }}
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
                            onChangeText={(text) => {
                                setEndTime(text);
                                if (text.length === 5) {
                                    const isValidTime = /^([01][0-9]|2[0-3]):([0-5][0-9])$/.test(text);
                                    if (!isValidTime) {
                                        Alert.alert(
                                            'Horário inválido',
                                            `Horário inválido: ${text}`,
                                            [{ text: 'OK', onPress: () => setEndTime('') }]
                                        );
                                    }
                                }
                            }}
                            onBlur={() => handleBlur(endTime, setEndTime)}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const MainComponent = () => {
    return (
        <View style={{ padding: 20 }}>
            <HorarioFuncRest title="Segunda" betweenText="à" />
            <HorarioFuncRest title="Sábado" betweenText="e" />
        </View>
    );
};

export default MainComponent;
