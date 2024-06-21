import React, { useState, useEffect }from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import BtnEditarReserva from '../../../components/ReservasRest/NovasReservas'
import styles from './styles';


const InfoReserva = [
    {
        codigo_produto: 1,
        num_mesa: 'Mesa Interna 10',
        descricao: 'Terça, 15/08/23 ás 18:30',
        qnt_pessoas: '10 Pessoas',
    }, {
        codigo_produto: 2,
        num_mesa: 'Mesa Interna 16',
        descricao: 'Segunda, 30/10/23 ás 18:30',
        qnt_pessoas: '1 Pessoa',
    }, {
        codigo_produto: 3,
        num_mesa: 'Mesa Interna 25',
        descricao: 'Segunda, 30/10/23 ás 18:30',
        qnt_pessoas: '3 Pessoas',
    }, {
        codigo_produto: 4,
        num_mesa: 'Mesa Interna 3',
        descricao: 'Segunda, 30/10/23 ás 18:30',
        qnt_pessoas: '4 Pessoas',
    }, {
        codigo_produto: 5,
        num_mesa: 'Mesa Interna 1',
        descricao: 'Segunda, 30/10/23 ás 18:30',
        qnt_pessoas: '2 Pessoas',
    }
];


export default function SuaReserva() {
    const [list, setList] = useState(InfoReserva); // Inicializa com a lista de produtos completa

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('HomeCli')}>
                    <AntDesign name="arrowleft" style={styles.return} />
                </TouchableOpacity>
            <View style={styles.title}>
                <Text style={styles.txtTitle}>Novas Reservas</Text>
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

