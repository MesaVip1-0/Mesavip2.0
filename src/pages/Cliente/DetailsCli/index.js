import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import HeartButton from '../../../components/HeartButton.js';

// Definindo o componente Welcome
export default function DetailsCli() {
    // Usando o hook useNavigation para obter a navegação
    const navigation = useNavigation();
    const [selectedIcons, setSelectedIcons] = useState({
        heart: false
    });

    const toggleIconSelection = (icon) => {
        setSelectedIcons((prevSelectedIcons) => ({
            ...prevSelectedIcons,
            [icon]: !prevSelectedIcons[icon],
        }));
    };
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
                            <Text style={styles.horarioText}>às</Text>
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
                            <Text style={styles.horarioText}> às </Text>
                            <View style={styles.horario}>
                                <Text style={styles.horarioText}>23:00</Text>
                            </View>
                        </View>
                    </View>

                    {/* Localização do restaurante */}
                    <Text style={styles.title}>Localização:</Text>
                    <Image
                        source={require('../../../assets/outLoca.png')}
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
                    <HeartButton
                        isSelected={selectedIcons.heart}
                        onPress={() => toggleIconSelection('heart')}
                    />
                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}

