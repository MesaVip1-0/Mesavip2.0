import React, { useState, useRef }  from "react";
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, Modal } from 'react-native';
import styles from "./styles";
import EditReserva from "./editReserva"

export default function EditarReserva() {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);


    const handleDelete = () => {
        // Lógica para excluir a reserva
        setModalVisible(false);
        console.log('Reserva excluída');
    };


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.containerLogo}>
                {/* Exibindo a imagem do logo */}
                <Image
                    source={require('./outbackBanner.jpg')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />

                {/* Botão de voltar para a esquerda no canto superior esquerdo do logo */}
                <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('SuaReserva')}>
                    <AntDesign name="arrowleft" style={styles.return} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.escolhaDia}>Escolha o Dia:</Text>
                    <EditReserva />
                </View>

                <View style={styles.viewBtnConfirma}>
                    <TouchableOpacity style={styles.btnConfirma} onPress={() => navigation.navigate('MesasDispo')}>
                        <Text>EDITAR RESERVA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnCancelar} onPress={() => setModalVisible(true)}>
                    <Text>CANCELAR RESERVA</Text>
                    <Feather name='x-circle' color='#000' size={30} style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Confirmar Exclusão</Text>
                        <Text style={styles.modalText}>Tem certeza que deseja excluir esta reserva?</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.button} onPress={handleDelete}>
                                <Text style={styles.buttonText}>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                                <Text style={styles.buttonText}>Não</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}


