import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const HorarioFuncRest = ({ onRemove, title }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isStartDay, setIsStartDay] = useState(true);
    const [selectedStartDay, setSelectedStartDay] = useState('Dia');
    const [selectedEndDay, setSelectedEndDay] = useState('Dia');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const options = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
        'Feriados'
    ];

    // Filtra as opções para o segundo dia removendo "Feriados"
    const filteredOptions = isStartDay ? options : options.filter(option => option !== 'Feriados');

    const renderOption = ({ item }) => (
        <TouchableOpacity
            style={styles.optionButton}
            onPress={() => {
                if (isStartDay) {
                    setSelectedStartDay(item);
                    if (item === 'Feriados') {
                        setSelectedEndDay('Dia');
                    }
                } else {
                    setSelectedEndDay(item);
                }
                setModalVisible(false);
            }}
        >
            <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
    );

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
        <View style={styles.horarioContainer}>
            <TouchableOpacity
                onPress={() => {
                    setIsStartDay(true);
                    setModalVisible(true);
                }}
            >
                <Text style={styles.horarioButtonText}>{title}{selectedStartDay}</Text>
            </TouchableOpacity>

            {selectedStartDay !== 'Feriados' && (
                <>
                    <Text style={styles.horarioText}>à</Text>
                    <TouchableOpacity
                        onPress={() => {
                            setIsStartDay(false);
                            setModalVisible(true);
                        }}
                    >
                        <Text style={styles.horarioButtonText}>{title}{selectedEndDay}</Text>
                    </TouchableOpacity>
                </>
            )}

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
                <TouchableOpacity onPress={onRemove}>
                    <AntDesign name='delete' style={styles.deleteIcon} />
                </TouchableOpacity>
            </View>



            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <FlatList
                        data={filteredOptions}
                        renderItem={renderOption}
                        keyExtractor={(item) => item}
                    />
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.closeButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default HorarioFuncRest;
