import React, { useState, useEffect }from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import styles from './styles';


const InfoReserva = [
    {
        codigo_produto: 1,
        descricao: 'Terça, 15/08/23 ás 18:30'

    }, {
        codigo_produto: 2,
        descricao: 'Segunda, 30/10/23 ás 18:30'
    }, {
        codigo_produto: 3,
        descricao: 'Segunda, 30/10/23 ás 18:30'
    }, {
        codigo_produto: 4,
        descricao: 'Segunda, 30/10/23 ás 18:30'
    }, {
        codigo_produto: 5,
        descricao: 'Segunda, 30/10/23 ás 18:30'
    }
];


const BtnEditarReserva = ({ item }) => {
    return (
        <View style={styles.containerBtn}>
        <View>
            <TouchableOpacity style={styles.btnMesa}>
                <Image style={styles.img_mesa} source={require('./mesa-interna.png')}></Image>
                <View style={styles.text}><Text style={styles.txtBtn}>Mesa Interna 10</Text></View>
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
};


export default function SuaReserva() {
    const [list, setList] = useState(InfoReserva); // Inicializa com a lista de produtos completa

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('HomeCli')}>
                    <AntDesign name="arrowleft" style={styles.return} />
                </TouchableOpacity>
            <View style={styles.title}>
                <Text style={styles.txtTitle}>Sua Reserva</Text>
            </View>

            <SafeAreaView style={styles.container1}>
                <FlatList
                    data={list}
                    renderItem={({ item }) => <BtnEditarReserva item={item} />}
                    ListEmptyComponent={<Text style={{ color: '#fff' }}>A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={(item) => item.codigo_produto.toString()}/>
            </SafeAreaView>
        </SafeAreaView>
    );
};

