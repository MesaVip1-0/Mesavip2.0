import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Easing, Modal, StyleSheet } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import styles from '../../pages/Restaurante/Reservas/styles';

const NovasReservas = ({ item }) => {
    const [expanded, setExpanded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const animatedHeight = useRef(new Animated.Value(0)).current;

    const toggleExpansion = () => {
        if (expanded) {
            Animated.timing(animatedHeight, {
                toValue: 0,
                duration: 300,
                easing: Easing.out(Easing.ease),
                useNativeDriver: false,
            }).start(() => setExpanded(false));
        } else {
            setExpanded(true);
            Animated.timing(animatedHeight, {
                toValue: 105, // altura desejada para a expansão (mesma altura que containerBtn)
                duration: 300,
                easing: Easing.out(Easing.ease),
                useNativeDriver: false,
            }).start();
        }
    };

    const handleDelete = () => {
        // Lógica para excluir a reserva
        setModalVisible(false);
        console.log('Reserva excluída');
    };

    return (
        <View style={styles.itemContainer}>
            <View style={styles.containerBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.btnMesa} onPress={toggleExpansion}>
                        <Image style={styles.img_mesa} source={require('../../pages/Cliente/SuaReserva/mesa-interna.png')} />
                        <View style={styles.text}>
                            <Text style={styles.txtBtn}>{item.num_mesa}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={styles.excluir}>
                            <Feather name='x-circle' color='#fe0000' size={40} style={{ margin: 1 }} />
                            <Text style={{ color: '#fff', fontSize: 10 }}>Cancelar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subDescripition}>{item.descricao}</Text>
                <AntDesign name='down' color='#fff' size={15} style={{ marginBottom: 10 }} />

            </View>
            <Animated.View style={{ height: animatedHeight, overflow: 'hidden' }}>
                <View style={[styles.containerInfo, { marginTop: 0, backgroundColor: '#f0f0f0', flexDirection: 'row' }]}>
                    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity>
                        <View>
                            <Text style={{ color: '#000', fontSize: 13, marginLeft: 10 }}>Ler QR code</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: '#000', fontSize: 13, marginLeft: 10  }}>{item.descricao}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <View>
                            <Text style={{ color: '#000', fontSize: 13, marginRight: 30 }}>{item.num_mesa}</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: '#000', fontSize: 13, marginRight: 30 }}>{item.qnt_pessoas}</Text>
                        </View>
                    </View>
                </View>
            </Animated.View>

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
        </View>
    );
}


export default NovasReservas;
