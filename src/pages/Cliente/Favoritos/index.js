import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import BtnFavoritados from '../../../components/Favoritos/BtnFavoritos'

const favoritados = [
    {
        codigo_produto: 1,
        codigo_categoria: 1,
        nome_produto: 'Habib’s, São Paulo',
        valor_produto: '90,00',
        img_logo: require('../Favoritos/logohab.png'),
        descricao: ''
    },
    {
        codigo_produto: 2,
        codigo_categoria: 1,
        nome_produto: 'Outback Steakhouse, Osasco',
        valor_produto: '90,00',
        img_logo: require('../Favoritos/logo-outback.jpg'),
        descricao: ''
    },
];

export default function Favoritos() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <Text style={styles.txtFav}>Favoritos</Text>
            </View>

            <SafeAreaView style={styles.container1}>
                <FlatList
                    data={favoritados}
                    renderItem={({ item }) => <BtnFavoritados item={item} navigation={navigation} />}
                    ListEmptyComponent={<Text>A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={favoritados => favoritados.codigo_produto}
                />
            </SafeAreaView>
        </SafeAreaView>
    );
}


