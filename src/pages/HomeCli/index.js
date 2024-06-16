// HomeCli.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import ProdItem from '../../components/HomeCli/ProdItem';
import FilterModal from '../../components/HomeCli/FilterModal';

const prod = [
    {
        codigo_produto: 1,
        codigo_categoria: 1,
        name_categoria: 'Churrascaria',
        name_produto: 'Outback SteakHouse',
        img_rest: require('../HomeCli/outback.png'),
        descricao_produto: 'Av. Dos Autonomistas, 1400 - Osasco'
    }, {
        codigo_produto: 2,
        codigo_categoria: 2,
        name_categoria: 'Suínos',
        name_produto: 'Casa Do Porco',
        img_rest: require('../HomeCli/Casa-do-Porco.png'),
        descricao_produto: 'R. Araújo, 124 - República, São Paulo'
    }, {
        codigo_produto: 3,
        codigo_categoria: 3,
        name_categoria: 'Fast Food',
        name_produto: 'Habib’s',
        img_rest: require('../HomeCli/habibs.jpg'),
        descricao_produto: 'R. Cerro Corá, 307 - Lapa, São Paulo'
    }, {
        codigo_produto: 4,
        codigo_categoria: 1,
        name_categoria: 'Churrascaria',
        name_produto: 'Fogo de Chão',
        img_rest: require('../HomeCli/fogo-de-chao.jpg'),
        descricao_produto: 'R. Augusta, 2077 - Cerqueira César, SP'
    }
];

export default function HomeCli() {
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(prod); // Inicializa com a lista de produtos completa
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [orderByAZ, setOrderByAZ] = useState(false); // Estado para controlar a ordem A a Z

    useEffect(() => {
        filterProducts();
    }, [searchText, selectedCategory, orderByAZ]);

    const filterProducts = () => {
        let filteredList = [...prod]; // Cria uma cópia para não alterar a lista original

        if (searchText !== '') {
            filteredList = filteredList.filter(
                (item) => item.name_produto.toLowerCase().includes(searchText.toLowerCase()) || item.name_categoria.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        if (selectedCategory) {
            filteredList = filteredList.filter(
                (item) => item.name_categoria === selectedCategory
            );
        }

        if (orderByAZ) {
            filteredList.sort((a, b) => a.name_produto.localeCompare(b.name_produto));
        }

        setList([...filteredList]); // Usamos spread para garantir que o estado seja atualizado
    };

    const handleOrderClick = () => {
        setOrderByAZ(!orderByAZ); // Alterna entre ordenação A a Z e não ordenado
        setModalVisible(false);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(
            category === selectedCategory
                ? null
                : category
        );
        setModalVisible(false);
    };

    const categories = [...new Set(prod.map(item => item.name_categoria))];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <View style={styles.searchBtn}>
                    <Ionicons name="search" size={24}/>
                    <TextInput
                        placeholder="Pesquise um produto ou categoria"
                        placeholderTextColor="#888"
                        value={searchText}
                        onChangeText={(t) => setSearchText(t)}/>
                </View>
                <TouchableOpacity
                    style={styles.filterBtn}
                    onPress={() => setModalVisible(true)}>
                    <Ionicons name="options-outline" size={24} color={'#fff'}/>
                </TouchableOpacity>
            </View>

            <SafeAreaView style={styles.container1}>
                <FlatList
                    data={list}
                    renderItem={({ item }) => <ProdItem item={item} />}
                    ListEmptyComponent={<Text style={{ color: '#fff' }}>A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={(item) => item.codigo_produto.toString()}/>
            </SafeAreaView>

            <FilterModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                orderByAZ={orderByAZ}
                handleOrderClick={handleOrderClick}
                categories={categories}
                handleCategoryClick={handleCategoryClick}
                selectedCategory={selectedCategory}
            />
        </SafeAreaView>
    );
}
