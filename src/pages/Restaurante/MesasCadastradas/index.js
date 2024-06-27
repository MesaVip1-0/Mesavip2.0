import React, { useState, useEffect }from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import BtnEditarReserva from '../../../components/MesasCadastradas/BtnEditMesas'
import styles from './styles';


const InfoReserva = [
    {
        codigo_produto: 1,
        num_mesa: 'Mesas: 1 a 6',
        descricao: '4 Pessoas, 120 Min'

    }, {
        codigo_produto: 2,
        num_mesa: 'Mesas: 8 a 12',
        descricao: '3 Pessoas, 60 Min'
    }, {
        codigo_produto: 3,
        num_mesa: 'Mesa: 7',
        descricao: '1 Pessoa, 60 Min'
    }, {
        codigo_produto: 4,
        num_mesa: 'Mesas: 13 a 20',
        descricao: '8 Pessoas, 120 Min'
    }, {
        codigo_produto: 5,
        num_mesa: 'Mesas: 21 a 35',
        descricao: '2 Pessoas, 60 Min'
    }
];


export default function MesasCadastradas() {
    const [list, setList] = useState(InfoReserva); // Inicializa com a lista de produtos completa

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('HomeRest')}>
                    <AntDesign name="arrowleft" style={styles.return} />
                </TouchableOpacity>
            <View style={styles.title}>
                <Text style={styles.txtTitle}>Mesas Cadastradas</Text>
            </View>

            <SafeAreaView style={styles.container1}>
                <FlatList
                    data={list}
                    renderItem={({ item }) => <BtnEditarReserva item={item} />}
                    ListEmptyComponent={<Text style={{ color: '#fff' }}>Nenhuma mesa cadastrada</Text>}
                    keyExtractor={(item) => item.codigo_produto.toString()}/>
            </SafeAreaView>
        </SafeAreaView>
    );
};

