import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import RestItem from '../../../components/HomeCli/RestItem';
import FilterModal from '../../../components/HomeCli/FilterModal';
import { useNavigation, useRoute } from '@react-navigation/native';
import { IP } from '../../IP';

export default function HomeCli() {
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]); // Adicionado estado para lista filtrada
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [orderByAZ, setOrderByAZ] = useState(false);
    const route = useRoute();

    useEffect(() => {
        if (route.params) {
            const { name_categoria, name_rest, descricao_rest } = route.params; // Ensure these properties are present in route.params

            console.log('New Restaurant:', route.params); // Log the route params to verify

            const newRestItem = {
                codigo_rest: list.length + 1,
                codigo_categoria: 1,
                name_categoria: name_categoria || 'Unknown Category', // Provide a default value
                name_rest: name_rest || 'Unnamed Restaurant', // Provide a default value
                img_rest: require('./outback.png'), // Default image
                descricao_rest: descricao_rest || 'No description available' // Provide a default value
            };
            setList([...list, newRestItem]);
        }
    }, [route.params, list]); // Corrigido o nome da dependência

    useEffect(() => {
        fetchRestaurants();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [searchText, selectedCategory, orderByAZ, list]); // Adicionado 'list' como dependência

    const fetchRestaurants = async () => {
        try {
            const response = await fetch(`http://${IP}:3000/restaurants`);
            const data = await response.json();
            setList(data);
        } catch (error) {
            console.error('Erro ao buscar restaurantes:', error);
        }
    };

    const filterProducts = () => {
        let filteredList = [...list];

        if (searchText !== '') {
            filteredList = filteredList.filter(
                (item) => (item.name && item.name.toLowerCase().includes(searchText.toLowerCase())) ||
                    (item.cidade && item.cidade.toLowerCase().includes(searchText.toLowerCase())) ||
                    (item.categoria && item.categoria.toLowerCase().includes(searchText.toLowerCase()))
            );
        }

        if (selectedCategory) {
            filteredList = filteredList.filter(
                (item) => item.name_categoria === selectedCategory
            );
        }

        if (orderByAZ) {
            filteredList.sort((a, b) => {
                if (!a.name) return 1; // If a.name is missing, put it at the end
                if (!b.name) return -1; // If b.name is missing, put it at the end
                return a.name.localeCompare(b.name);
            });
        }

        setFilteredList(filteredList); // Atualiza a lista filtrada
    };

    const handleOrderClick = () => {
        setOrderByAZ(!orderByAZ);
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

    const categories = [...new Set(list.map(item => item.name_categoria))];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <View style={styles.searchBtn}>
                    <Ionicons name="search" size={24} />
                    <TextInput
                        placeholder="Pesquise um rest ou categoria"
                        placeholderTextColor="#888"
                        value={searchText}
                        onChangeText={(t) => setSearchText(t)} />
                </View>
                <TouchableOpacity
                    style={styles.filterBtn}
                    onPress={() => setModalVisible(true)}>
                    <Ionicons name="options-outline" size={24} color={'#fff'} />
                </TouchableOpacity>
            </View>

            <SafeAreaView style={styles.container1}>
                <FlatList
                    data={filteredList} // Use filteredList em vez de list
                    renderItem={({ item }) => <RestItem key={item._id} item={item} />}
                    ListEmptyComponent={<Text style={{ color: '#fff' }}>A LISTA DE RESTAURANTES ESTÁ VAZIA</Text>}
                    keyExtractor={(item) => item._id.toString()} />
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
