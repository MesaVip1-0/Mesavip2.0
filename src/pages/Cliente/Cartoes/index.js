import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'



const dados = [
    {
        cod_cartao: 1,
        numero: '5503 6957 9351 7390',
        ccv: '123',
        nome_titular: 'Thiago Justino',
        validade: '12/29',
    },{
        cod_cartao: 2,
        numero: '5503 6957 9355 7390',
        ccv: '123',
        nome_titular: 'Thiago Justino',
        validade: '12/29',
    }
];

const CartoesEstilo = ({ item, navigation }) => {
    return (
            <View style={{ flexDirection: 'row', height: 50, marginTop: 20, alignItems: 'center' }}>
                <View style={{
                    width: 80, height: 50, // altura da imagem
                    borderRadius: 25, backgroundColor: '#8b01bf',
                    justifyContent: 'center',
                    alignItems: 'center', marginLeft: 20
                }}>
                    <Image
                        source={require('../../../assets/nubank-logo.png')}
                        style={{ width: 50, height: 40 }}
                        resizeMode='contain'
                    />
                </View>
                <Text style={{ color: '#fff', fontSize: 20, marginLeft: 15, fontWeight: 'bold' }}>5446 1002 6116 0575</Text>
            </View>

    );
};

export default function Cartoes() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.txtTitle}>Cartões Cadastrados</Text>
            </View>

            <SafeAreaView>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <AntDesign name="creditcard" style={styles.iconsStyle} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.cardDebit}>Cartões de Crédito</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <FlatList
                    data={dados}
                    renderItem={({ item }) => <CartoesEstilo item={item} navigation={navigation} />}
                    ListEmptyComponent={<Text>A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={dados => dados.numero}
                />
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                        <AntDesign name="creditcard" style={styles.iconsStyle} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.cardDebit}>Cartões de Débito</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <SafeAreaView>
                <FlatList
                    data={dados}
                    renderItem={({ item }) => <CartoesEstilo item={item} navigation={navigation} />}
                    ListEmptyComponent={<Text>A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={dados => dados.numero}
                />
                </SafeAreaView>


                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.btnCad}>
                        <Text style={styles.txtBtn}>Cadastrar Cartão</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaView>
    )
}
