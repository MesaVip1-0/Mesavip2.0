import React, {useState} from "react";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, Modal } from 'react-native';
import styles from "./styles";
import EditMesas from "./EditMesas"

export default function EditarMesas() {

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    const handleConfirm = () => {
        // Lógica para Confirmar edição de mesa
        setModalVisible(false);
        console.log('Mesas Alterada');
    };


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.containerLogo}>

                {/* Botão de voltar para a esquerda no canto superior esquerdo do logo */}
                <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('MesasCadastradas')}>
                    <AntDesign name="arrowleft" style={styles.return} />
                </TouchableOpacity>
                <Text style={styles.titulo}>Editar Mesas</Text>

            </View>
            <ScrollView>
                <View>
                    <Text style={styles.escolhaDia}>Mesas internas ou externas:</Text>
                    <EditMesas />
                </View>

                <View style={styles.viewBtnConfirma}>
                    <TouchableOpacity style={styles.btnConfirma}  onPress={() => setModalVisible(true)}>
                        <Text>EDITAR</Text>
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
                        <Text style={styles.modalTitle}>Confirmar Alterações</Text>
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

        </SafeAreaView>
    );
}


