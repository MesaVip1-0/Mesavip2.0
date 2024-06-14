import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'


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

