// Em HorarioFuncRest.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const HorarioFuncRest = ({ onRemove, title }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isStartDay, setIsStartDay] = useState(true); // New state to determine which day to set
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
        'Sábado'
    ];

    const renderOption = ({ item }) => (
        <TouchableOpacity
            style={styles.optionButton}
            onPress={() => {
                if (isStartDay) {
                    setSelectedStartDay(item);
                } else {
                    setSelectedEndDay(item);
                }
                setModalVisible(false);
            }}
        >
            <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.horarioContainer}>
            <TouchableOpacity
                onPress={() => { setIsStartDay(true); setModalVisible(true); }}
            >
                <Text style={styles.horarioButtonText}>{title}{selectedStartDay}</Text>
            </TouchableOpacity>

            <Text style={styles.horarioText}>à</Text>

            <TouchableOpacity
                onPress={() => { setIsStartDay(false); setModalVisible(true); }}
            >
                <Text style={styles.horarioButtonText}>{title}{selectedEndDay}</Text>
            </TouchableOpacity>

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
                            const isValidTime = /^([01][0-9]|2[0-3]):([0-5][0-9])$/.test(text);
                            if (isValidTime) {
                                setStartTime(text);
                                console.log(`Horário de início válido: ${text}`);
                            } else {
                                console.log(`Horário de início inválido: ${text}`);
                            }
                        }}
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
                            const isValidTime = /^([01][0-9]|2[0-3]):([0-5][0-9])$/.test(text);
                            if (isValidTime) {
                                setEndTime(text);
                                console.log(`Horário de término válido: ${text}`);
                            } else {
                                console.log(`Horário de término inválido: ${text}`);
                            }
                        }}
                    />
                </View>

                <TouchableOpacity onPress={onRemove}>
                    <AntDesign name='delete' size={30} color='red' />
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
                        data={options}
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
