import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from 'react-native-masked-text';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

function TextMask(props) {
    return (
        <TextInputMask
            style={styles.horarioText}
            type={'datetime'}
            options={{
                format: 'HH:mm'
            }}
            value={props.value}
            onChangeText={(text) => {
                const isValidTime = /^([01][0-9]|2[0-3]):([0-5][0-9])$/.test(text);
                if (isValidTime) {
                    console.log(`Horário válido: ${text}`);
                } else {
                    console.log(`Horário inválido: ${text}`);
                }
            }}
        />
    )
}


// Definindo o componente Welcome
export default function HomeRest() {
    // Usando o hook useNavigation para obter a navegação
    const navigation = useNavigation();
    const [selectedIcons, setSelectedIcons] = useState({
        wifi: false,
        car: false,
        ac: false,
        outdoor: false,
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

            </View>

            {/* Container do formulário */}
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <ScrollView>
                    {/* Título do restaurante */}
                    <TextInput style={styles.title} multiline>Outback SteakHouse {"\n"}Churrascaria</TextInput>

                    {/* Descrição do restaurante */}
                    <Text style={styles.title}>Sobre</Text>
                    <TextInput style={styles.subTitle} multiline>
                        A especialidade da casa é a carne, como a costela ao molho barbecue, uma das mais pedidas.
                    </TextInput>

                    {/* Lista de serviços oferecidos pelo restaurante */}
                    <Text style={styles.title}>Temos</Text>
                    <View style={styles.iconsContainerList}>
                        <TouchableOpacity onPress={() => toggleIconSelection('wifi')} style={styles.iconsContainer}>
                            <AntDesign name="wifi" style={[styles.iconsStyle, selectedIcons.wifi && styles.selectedIcon]} />
                            <Text style={[styles.subTitleIcon, selectedIcons.wifi && styles.titleIconSelected]}>WI-FI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => toggleIconSelection('car')} style={styles.iconsContainer}>
                            <AntDesign name="car" style={[styles.iconsStyle, selectedIcons.car && styles.selectedIcon]} />
                            <Text style={[styles.subTitleIcon, selectedIcons.car && styles.titleIconSelected]}>Estacionamento</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => toggleIconSelection('ac')} style={styles.iconsContainer}>
                            <FontAwesome name="thermometer-4" style={[styles.iconsStyle, selectedIcons.ac && styles.selectedIcon]} />
                            <Text style={[styles.subTitleIcon, selectedIcons.ac && styles.titleIconSelected]}>Ar-Condicionado</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => toggleIconSelection('outdoor')} style={styles.iconsContainer}>
                            <Feather name="sun" style={[styles.iconsStyle, selectedIcons.outdoor && styles.selectedIcon]} />
                            <Text style={[styles.subTitleIcon, selectedIcons.outdoor && styles.titleIconSelected]}>Área ao ar livre</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Horário de funcionamento do restaurante */}
                    <Text style={styles.title}>Horário de Funcionamento:</Text>
                    <View style={styles.horarioContainer}>
                        <Text style={styles.horarioText}>Segunda a Sexta:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.1 }} />
                            <View style={styles.horario}>
                                <TextMask />
                            </View>
                            <Text style={styles.horarioText}>às</Text>
                            <View style={styles.horario}>
                                <TextMask />
                            </View>
                        </View>
                    </View>

                    <View style={styles.horarioContainer}>
                        <Text style={styles.horarioText}>Sábado e Domingo:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.1 }} />
                            <View style={styles.horario}>
                                <TextMask />
                            </View>
                            <Text style={styles.horarioText}> às </Text>
                            <View style={styles.horario}>
                                <TextMask />
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
                    <TouchableOpacity style={styles.buttonReserv}>
                        <Text style={styles.buttonText}>Reservar Mesa</Text>
                    </TouchableOpacity>

                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}

