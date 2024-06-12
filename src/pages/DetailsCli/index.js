import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Definindo o componente Welcome
export default function Welcome() {
    // Usando o hook useNavigation para obter a navegação
    const navigation = useNavigation();

    // Retornando o JSX do componente
    return (
        <SafeAreaView style={styles.container}>
            {/* Container do logo */}
            <View style={styles.containerLogo}>
                {/* Exibindo a imagem do logo */}
                <Image
                    source={require('../HomeCli/outback.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />

                {/* Botão de voltar para a esquerda no canto superior esquerdo do logo */}
                <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('HomeCli')}>
                    <AntDesign name="arrowleft" style={styles.return} />
                </TouchableOpacity>
            </View>

            {/* Container do formulário */}
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <ScrollView>
                    {/* Título do restaurante */}
                    <Text style={styles.title}>Outback SteakHouse {"\n"}Churrascaria</Text>

                    {/* Descrição do restaurante */}
                    <Text style={styles.title}>Sobre</Text>
                    <Text style={styles.subTitle}>
                        A especialidade da casa é a carne, como a costela ao molho barbecue, uma das mais pedidas.
                    </Text>

                    {/* Lista de serviços oferecidos pelo restaurante */}
                    <Text style={styles.title}>Temos</Text>
                    <View style={styles.iconsContainerList}>
                        <View style={styles.iconsContainer}>
                            {/* Ícone de Wi-Fi */}
                            <AntDesign name="wifi" style={styles.iconsStyle} />
                            {/* Texto correspondente ao ícone */}
                            <Text style={styles.subTitle}>WI-FI</Text>
                        </View>
                        <View style={styles.iconsContainer}>
                            {/* Ícone de carro */}
                            <AntDesign name="car" style={styles.iconsStyle} />
                            {/* Texto correspondente ao ícone */}
                            <Text style={styles.subTitle}>Estacionamento</Text>
                        </View>
                        <View style={styles.iconsContainer}>
                            {/* Ícone de termômetro */}
                            <FontAwesome name="thermometer-4" style={styles.iconsStyle} />
                            {/* Texto correspondente ao ícone */}
                            <Text style={styles.subTitle}>Ar-Condicionado</Text>
                        </View>
                        <View style={styles.iconsContainer}>
                            {/* Ícone de sol */}
                            <Feather name="sun" style={styles.iconsStyle} />
                            {/* Texto correspondente ao ícone */}
                            <Text style={styles.subTitle}>Área ao ar livre</Text>
                        </View>
                    </View>

                    {/* Horário de funcionamento do restaurante */}
                    <Text style={styles.title}>Horário de Funcionamento:</Text>
                    <View style={styles.horarioContainer}>
                        <Text style={styles.horarioText}>Segunda a Sexta:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.1 }} />
                            <View style={styles.horario}>
                                <Text style={styles.horarioText}>8:00</Text>
                            </View>
                            <Text style={styles.horarioText}>à</Text>
                            <View style={styles.horario}>
                                <Text style={styles.horarioText}>22:00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.horarioContainer}>
                        <Text style={styles.horarioText}>Sábado e Domingo:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.1 }} />
                            <View style={styles.horario}>
                                <Text style={styles.horarioText}>10:00</Text>
                            </View>
                            <Text style={styles.horarioText}> à </Text>
                            <View style={styles.horario}>
                                <Text style={styles.horarioText}>23:00</Text>
                            </View>
                        </View>
                    </View>

                    {/* Localização do restaurante */}
                    <Text style={styles.title}>Localização:</Text>
                    <Image
                        source={require('../../assets/outLoca.png')}
                        style={{ width: '100%', height: 250, marginStart: "5%", marginTop: "10%" }}
                        resizeMode="center"
                    />

                    {/* Botão do cardápio */}
                    <Text style={styles.title}>Nosso Cardápio:</Text>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.buttonText}>Cardápio</Text>
                    </TouchableOpacity>

                    {/* Botão de reserva */}
                    <Text style={styles.titleReserv}>Faça sua Reserva:</Text>
                    <TouchableOpacity style={styles.buttonReserv} onPress={() => navigation.navigate('ReservaMesa')}>
                        <Text style={styles.buttonText}>Reservar Mesa</Text>
                    </TouchableOpacity>

                    {/* Ícone de Favorito */}
                    <AntDesign style={styles.heartContainer} name="hearto" />
                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#000',
    },
    containerLogo: {
        flex: 0.4,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#141414',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderTopWidth: 1.5,
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        borderColor: '#fff',
        paddingEnd: '5%',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        paddingStart: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    subTitle: {
        color: '#fff',
        fontSize: 16.5,
        fontWeight: 'bold',
        marginTop: 15,
        paddingStart: '5%',
    },
    text: {
        color: '#fff',
        paddingStart: '5%',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },

    heartContainer: {
        position: 'absolute',
        top: 30,
        right: 20,
        fontSize: 30,
        color: '#fff',
    },
    iconsContainerList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: '5%',
        paddingEnd: '5%',
        flexWrap: 'wrap',
        marginTop: '5%',
    },
    iconsStyle: {
        fontSize: 38,
        color: '#fff',
    },
    iconsContainer: {
        alignItems: 'center',
        width: '45%',
        marginBottom: '5%',
    },
    horarioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: '5%',
        paddingEnd: '5%',
        marginTop: 15,
    },
    horarioTextContainer: {
        width: '55%',
        alignItems: 'flex-start',
    },
    horario: {
        width: '30%',
        height: 35,
        borderRadius: 10,
        borderWidth: 2.5,
        borderColor: '#fff',
        backgroundColor: '#423B3B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    horarioStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    horarioText: {
        color: '#fff',
        fontSize: 16.5,
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
    Button: {
        backgroundColor: '#423B3B',
        width: '80%',
        height: 50,
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff'
    },
    buttonText: {
        color: '#fff',
        fontSize: 21,
        fontWeight: 'bold'
    },
    buttonReserv: {
        backgroundColor: '#8E1515',
        width: '80%',
        height: 50,
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#8E1515'
    },
    titleReserv: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        flexDirection: 'row',
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderColor: '#fff'
    },
    return: {
        position: 'absolute',
        top: 5,
        left: 5,
        fontSize: 34,
        color: '#fff',
        zIndex: 1,
    }
});