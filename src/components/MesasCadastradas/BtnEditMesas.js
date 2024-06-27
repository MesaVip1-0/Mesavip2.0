import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import styles from '../../pages/Restaurante/MesasCadastradas/styles';


const BtnEditMesas = ({ item }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.containerBtn}>
        <View>
            <TouchableOpacity style={styles.btnMesa} onPress={() => navigation.navigate('EditMesas')}>
                <Image style={styles.img_mesa} source={require('../../pages/Cliente/SuaReserva/mesa-interna.png')}></Image>
                <View style={styles.text}><Text style={styles.txtBtn}>{item.num_mesa}</Text></View>
                <View style={styles.pencil}>
                    <FontAwesome name='pencil' color='#fff' size={40} style={{ margin: 1 }} />
                </View>
            </TouchableOpacity>
        </View>
        <Text style={styles.subDescripition}> {item.descricao}</Text>
        {/* <TouchableOpacity style={styles.btnMesa}>
            <Image style={styles.img_mesa}></Image>
            <View style={styles.bah}><Text style={styles.txtBtn}>Mesa Interna 10</Text></View>
            <View style={styles.pencil}>
                <FontAwesome name='pencil' color='#fff' size={50} style={{ margin: 1 }} />
            </View>
        </TouchableOpacity> */}
    </View>
    );
}

export default BtnEditMesas;