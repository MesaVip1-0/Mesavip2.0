import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

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

const BtnFavoritados = ({ item, navigation }) => {
    return (
        <View style={styles.btnLogo}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailsCli')}>
                {/* IMAGEM LOGO */}
                <Image
                    style={styles.image}
                    source={item.img_logo}
                />
            </TouchableOpacity>

            {/* DESCRIÇÃO DO FAVORITADO */}
            <View style={styles.viewDescription}>
                <Text style={styles.descriptionTxt}>
                    {item.nome_produto}
                </Text>
            </View>

            <View>
                <TouchableOpacity>
                    <FontAwesome name='heart' color='#fe0000' size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

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


