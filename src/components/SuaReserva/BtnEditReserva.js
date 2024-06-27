import React, {useState, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, Modal, Animated, Easing, } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import styles from '../../pages/Cliente/SuaReserva/styles';
import QRCode1 from 'react-native-qrcode-svg';



const BtnEditarReserva = ({ item }) => {
    const navigation = useNavigation();
    const [expanded, setExpanded] = useState(false);
    const [qrCodeVisible, setQrCodeVisible] = useState(false);
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
                    <TouchableOpacity onPress={() => navigation.navigate('EditarReserva')}>
                        <View style={styles.editar}>
                            <FontAwesome name='pencil' color='#fff' size={40}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subDescripition}>{item.descricao}</Text>
                <AntDesign name='down' color='#fff' size={15} style={{ marginBottom: 10 }} />

            </View>
            <Animated.View style={{ height: animatedHeight, overflow: 'hidden' }}>
                <View style={styles.containerInfo}>
                    <View style={styles.qrCode}>
                        <TouchableOpacity onPress={() => setQrCodeVisible(true)}>
                            <Text style={styles.outlinedText}>QR code de confirmação</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoReserva}>
                        <View>
                            <Text style={{ color: '#000', fontSize: 13, marginRight: 30 }}>{item.descricao}</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 13, marginRight: 10 }}>{item.qntPessoas}</Text>
                        </View>
                    </View>
                </View>
            </Animated.View>

            <Modal
                transparent={true}
                visible={qrCodeVisible}
                animationType="fade"
                onRequestClose={() => setQrCodeVisible(false)}
            >
                <View style={styles.qrModalBackground}>
                    <View style={styles.qrModalContainer}>
                        <QRCode1
                            value={item.num_mesa}
                            size={200}
                        />
                        <TouchableOpacity style={styles.closeButton} onPress={() => setQrCodeVisible(false)}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default BtnEditarReserva;