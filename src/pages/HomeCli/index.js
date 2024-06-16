import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    Modal
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useState, useEffect} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const prod = [
    {
        codigo_produto: 1,
        codigo_categoria: 1,
        nome_categoria: 'Churrascaria',
        name_produto: 'Outback SteakHouse',
        valor_produto: '90,00',
        imagem_livro: require('../HomeCli/outback.png'),
        descricao_produto: 'Av. Dos Autonomistas, 1400 - Osasco'
    }, {
        codigo_produto: 2,
        codigo_categoria: 2,
        nome_categoria: 'Suínos',
        name_produto: 'Casa Do Porco',
        valor_produto: '90,00',
        imagem_livro: require('../HomeCli/Casa-do-Porco.png'),
        descricao_produto: 'R. Araújo, 124 - República, São Paulo'
    }, {
        codigo_produto: 3,
        codigo_categoria: 3,
        nome_categoria: 'Fast Food',
        name_produto: 'Habib’s',
        valor_produto: '90,00',
        imagem_livro: require('../HomeCli/habibs.jpg'),
        descricao_produto: 'R. Cerro Corá, 307 - Lapa, São Paulo'
    }, {
        codigo_produto: 4,
        codigo_categoria: 1,
        nome_categoria: 'Churrascaria',
        name_produto: 'Fogo de Chão',
        valor_produto: '90,00',
        imagem_livro: require('../HomeCli/fogo-de-chao.jpg'),
        descricao_produto: 'R. Augusta, 2077 - Cerqueira César, SP'
    }
];

const ProdItem = ({item, navigation}) => {
    return (
        <View style={styles.containerRest}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailsCli')}>
                <Image style={styles.image} source={item.imagem_livro}/>
            </TouchableOpacity>
            <Text style={styles.description}>
                {item.name_produto}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
                {item.descricao_produto}
            </Text>
        </View>
    );
};

export default function HomeCli() {
    const navigation = useNavigation();
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
                (item) => item.name_produto.toLowerCase().includes(searchText.toLowerCase()) || item.nome_categoria.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        if (selectedCategory) {
            filteredList = filteredList.filter(
                (item) => item.nome_categoria === selectedCategory
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

    const categories = [...new Set(prod.map(item => item.nome_categoria))];

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
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
                    renderItem={({item}) => <ProdItem item={item} navigation={navigation}/>}
                    ListEmptyComponent={<Text style = {{ color: '#fff' }} > A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={(item) => item.codigo_produto.toString()}/>
            </SafeAreaView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.containerFilter}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Filtrar por:</Text>
                        <TouchableOpacity
                            style={[
                                styles.categoryBtn, orderByAZ && {
                                    backgroundColor: 'red', borderWidth: 1, borderColor: '#fff'
                                }
                            ]}
                            onPress={handleOrderClick}>
                            <Text
                                style={[
                                    styles.categoryText, orderByAZ && {
                                        color: '#fff'
                                    }
                                ]}>A a Z</Text>
                        </TouchableOpacity>
                        {
                            categories.map((category) => (
                                <TouchableOpacity
                                    key={category}
                                    style={styles.categoryBtn}
                                    onPress={() => handleCategoryClick(category)}>
                                    <Text
                                        style={[
                                            styles.categoryText, selectedCategory === category && {
                                                color: 'red'
                                            }
                                        ]}>
                                        {category}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                        <TouchableOpacity
                            style={styles.buttonClose}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
