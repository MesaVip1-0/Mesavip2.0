import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

const prod = [
    {
        codigo_produto: 1,
        codigo_categoria: 1,
        name_produto: 'Outback SteakHouse',
        valor_produto: '90,00',
        imagem_livro: require('../HomeCli/outback.png'),
        descricao_produto: 'Outback SteakHouse \n Av. Dos Autonomistas, 1400 - Osasco'
    },
    {
        codigo_produto: 2,
        codigo_categoria: 1,
        name_produto: 'Casa Do Porco',
        valor_produto: '90,00',
        imagem_livro: require('../HomeCli/Casa-do-Porco.png'),
        descricao_produto: 'Casa Do Porco \n R. Araújo, 124 - República, São Paulo'
    },
    {
        codigo_produto: 3,
        codigo_categoria: 5,
        name_produto: 'Habib’s',
        valor_produto: '90,00',
        imagem_livro: require('../HomeCli/habibs.jpg'),
        descricao_produto: 'Habib’s \n R. Cerro Corá, 307 - Lapa, São Paulo'
    },
    {
        codigo_produto: 4,
        codigo_categoria: 5,
        name_produto: 'Fogo de Chão',
        valor_produto: '90,00',
        imagem_livro: require('../HomeCli/fogo-de-chao.jpg'),
        descricao_produto: 'Fogo de Chão \n R. Augusta, 2077 - Cerqueira César, SP'
    },
];


const ProdItem = ({ item, navigation }) => {
    return (
        <View style={styles.container2}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailsCli')} >
                {/* Image  */}
                <Image
                    style={styles.image}
                    source={item.imagem_livro}
                />
            </TouchableOpacity>

            {/* Bed & Bedroom  */}
            <Text style={styles.description}>
                {item.nome_produto}
            </Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>
                {item.descricao_produto}
            </Text>

            {/*  Old price & new price */}
        </View>
    );

}
export default function HomeCli() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(prod);

    useEffect(() => {
        if (searchText === '') {
            setList(prod);
        } else {
            setList(
                prod.filter(
                    (item) =>
                        item.name_produto.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                )
            );
        }
    }, [searchText]);

    const handleOrderClick = () => {
        let newList = [...prod];

        newList.sort((a, b) => (a.name_produto > b.name_produto ? 1 : b.name_produto > a.name_produto ? -1 : 0));

        setList(newList);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            <View style={styles.container}>
                <View style={styles.actionRow}>
                    <TouchableOpacity>
                        <View style={styles.searchBtn}>
                            <Ionicons name="search" size={24} />
                            <TextInput
                                placeholder="Pesquise uma pessoa"
                                placeholderTextColor="#888"
                                value={searchText}
                                onChangeText={(t) => setSearchText(t)}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterBtn} onPress={handleOrderClick}>
                        <Ionicons name="options-outline" size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>

            </View>

            <SafeAreaView style={styles.container1}>
                <FlatList
                    data={list}
                    renderItem={({ item }) => <ProdItem item={item} navigation={navigation} />}
                    ListEmptyComponent={<Text>A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={(list) => list.codigo_produto}
                />

            </SafeAreaView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141414',
        height: 100,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {
            width: 1,
            height: 10,

        },
    },
    container1: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        width: 340,
        margin: 20,
        borderBottomWidth: 0.5,
        paddingBottom: 20,
        borderColor: '#a2a2a2',
        borderRadius: 10,
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 16,
        paddingTop: 10
    },

    searchBtn: {
        backgroundColor: '#D7D7D7',
        flexDirection: 'row',
        gap: 10,
        padding: 14,
        alignItems: 'center',
        width: 280,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#d5d5d5',
        borderRadius: 30,
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    filterBtn: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 24,
    },
    text: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    subText: {
        color: 'grey',
        fontSize: 15,
        fontWeight: 'bold'
    },
    image: {
        width: '100%',
        height: 250, // ajuste conforme necessário
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 2.5,
        borderColor: '#FE0000'
    },

    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b',
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'center',
        color: '#fff'
    },
    prices: {
        fontSize: 18,
        marginVertical: 10,
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    price: {
        fontWeight: 'bold',
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    }
});
