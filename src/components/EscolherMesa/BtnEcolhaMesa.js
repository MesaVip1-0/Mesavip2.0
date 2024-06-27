import React, { useState, useEffect }from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, Image, ScrollView, Modal } from 'react-native';
import styles from '../../pages/Cliente/MesasDispo/styles';

const BtnEscolherMesa = ({ item }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleConfirm = () => {
        // Lógica para Confirmar a reserva
        setModalVisible(false);
        console.log('Reserva Confirmada');
    };

    return (
        <View>
            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btnMesa} onPress={() => setModalVisible(true)}>
                    <Image style={styles.img_mesa} source={require('../../pages/Cliente/MesasDispo/mesa-interna.png')}></Image>
                    <View style={styles.text}><Text style={styles.txtBtn}>{item.descricao}</Text></View>
                </TouchableOpacity>
            </View>

            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Confirmar Reserva</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                                <Text style={styles.buttonText}>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                                <Text style={styles.buttonText}>Não</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default BtnEscolherMesa;

