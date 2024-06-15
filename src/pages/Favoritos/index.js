import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

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
                    renderItem={({item}) => <BtnFavoritados item={item} navigation={navigation}/>}
                    ListEmptyComponent={<Text>A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={favoritados => favoritados.codigo_produto}
                />
            </SafeAreaView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    // STYLE btnFavoritos
    btnLogo: {
        margin: 20,
        width: '90%',
        borderBottomWidth: 0.5,
        paddingBottom: 20,
        borderColor: '#a2a2a2',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60, // ajuste conforme necessário
        borderRadius: 100,
        borderWidth: 2.5,
        borderColor: '#FE0000',
    },
    viewDescription: {
        alignItems: 'flex-start',
        width: '75%'
    },
    descriptionTxt: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 18,
        lineHeight: 26,
        alignItems: 'flex-start',
        color: '#fff'
    },
    //FINAL STYLE

    //STYLE Favoritos
    container: {
        backgroundColor: '#141414',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtFav: {
        color: '#fff',
        fontSize: 40
    },
    container1: {
        flex: 1,
        backgroundColor: '#141414'
    },
    //FINAL STYLE
});
