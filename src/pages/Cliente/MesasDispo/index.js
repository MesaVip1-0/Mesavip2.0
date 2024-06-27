import React, { useState, useEffect }from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import BtnEscolherMesa from '../../../components/EscolherMesa/BtnEcolhaMesa'
import styles from './styles';


const InfoReserva = [
    {
        codigo_produto: 1,
        descricao: 'Mesa Interna 10'
    }, {
        codigo_produto: 2,
        descricao: 'Mesa Interna 5'
    }, {
        codigo_produto: 3,
        descricao: 'Mesa Interna 1'
    }, {
        codigo_produto: 4,
        descricao: 'Mesa Interna 8'
    }
];





export default function MesasDispo() {
    const [list, setList] = useState(InfoReserva); // Inicializa com a lista de produtos completa

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('ReservaMesa')}>
                    <AntDesign name="arrowleft" style={styles.return} />
                </TouchableOpacity>
            <View style={styles.title}>
                <Text style={styles.txtTitle}>Escolha Sua Mesa</Text>
            </View>

            <SafeAreaView style={styles.container1}>
                <FlatList
                    data={list}
                    renderItem={({ item }) => <BtnEscolherMesa item={item} />}
                    ListEmptyComponent={<Text style={{ color: '#fff' }}>A LISTA DE MESAS ESTÁ VAZIA</Text>}
                    keyExtractor={(item) => item.codigo_produto.toString()}/>
            </SafeAreaView>
        </SafeAreaView>
    );
};

