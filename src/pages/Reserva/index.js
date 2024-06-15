import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const agendadas = [
    {
        codigo_produto: 1,
        nome_produto: 'Habib’s, São Paulo',
        valor_produto: '90,00',
        img_logo: require('../Favoritos/logohab.png'),
        descricao: 'Domingo, 31/12/23 ás 13:30'

    }, {
        codigo_produto: 2,
        nome_produto: 'Outback Steakhouse, Osasco',
        valor_produto: '90,00',
        img_logo: require('../Favoritos/logo-outback.jpg'),
        descricao: 'Domingo, 31/11/23 ás 13:30'
    }
];

const ResAgenda = ({ item, navigation }) => {
    return (
        <View style={styles.btnLogo}>
            <TouchableOpacity onPress={() => navigation.navigate('SuaReserva')}>
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

                {/* SUB DESCRIÇÃO */}
                <Text style={styles.subDescripition}>
                    {item.descricao}
                </Text>
            </View>
        </View>
    );
}

const onde_esteve = [
    {
        codigo_produto: 1,
        nome_produto: 'Casa do Porco',
        valor_produto: '90,00',
        img_logo: require('../Favoritos/Casa-do-Porco-logo.jpeg'),
        descricao: 'Terça, 15/08/23 ás 18:30'

    }, {
        codigo_produto: 2,
        nome_produto: 'Fogo de Chão, São Paulo',
        valor_produto: '90,00',
        img_logo: require('../Favoritos/fogo-logo.png'),
        descricao: 'Segunda, 30/10/23 ás 18:30'
    }
];

const Anteriores = ({ item, navigation }) => {
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

                {/* SUB DESCRIÇÃO */}
                <Text style={styles.subDescripition}>
                    {item.descricao}
                </Text>
            </View>
        </View>
    );

}
export default function Reservas() {
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>

            <View style={styles.container}>
                <Text style={styles.txtFav}>Reservas</Text>
            </View>

            <SafeAreaView style={styles.container1}>
                <Text style={styles.txtAgenda}>Agendadas:</Text>
                <FlatList
                    data={agendadas}
                    renderItem={({ item }) => <ResAgenda item={item} navigation={navigation} />}
                    ListEmptyComponent={<Text> A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={item => item.codigo_produto} />

                <Text style={styles.txtAgenda}>Onde já esteve:</Text>
                <FlatList
                    data={onde_esteve}
                    renderItem={({ item }) => <Anteriores item={item} navigation={navigation} />}
                    ListEmptyComponent={<Text> A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={item => item.codigo_produto} />
            </SafeAreaView>
        </SafeAreaView>
    );
}

