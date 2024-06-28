import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import styles from './styles';
import IconButton from '../../../components/IconButton';
import { IP } from '../../IP.js';

export default function DetailsCli() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [categoria, setCategoria] = useState('');
    const [desc, setDesc] = useState('');
    const [selectedIcons, setSelectedIcons] = useState({
        wifi: false,
        car: false,
        ac: false,
        outdoor: false
    });
    const [horariosFuncionamento, setHorariosFuncionamento] = useState([]);

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    const fetchRestaurantData = async () => {
        try {
            const response = await axios.get(`http://${IP}:3000/restaurante/667a2b55f3d605aadf8355d3`);
            console.log('Dados recebidos:', response.data); // Adicione esta linha para debug
            const data = response.data;
    
            setName(data.name);
            setDesc(data.desc);
            setSelectedIcons({
                wifi: data.wifi,
                car: data.estacionamento,
                ac: data.arCondicionado,
                outdoor: data.areaExterna
            });
            setHorariosFuncionamento(data.horariosFuncionamento || []);
            setCategoria(data.categoria || '');
        } catch (error) {
            console.error('Erro ao buscar dados do restaurante:', error);
            alert('Erro ao buscar dados do restaurante');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../HomeCli/outback.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
                <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('HomeCli')}>
                    <AntDesign name="arrowleft" style={styles.return} />
                </TouchableOpacity>
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <ScrollView>
                    <Text style={styles.title}>{name}{"\n"}{categoria}</Text>
                    <Text style={styles.title}>Sobre</Text>
                    <Text style={styles.subTitle}>{desc}</Text>
                    <Text style={styles.title}>Temos</Text>
                    <View style={styles.iconsContainerList}>
                        {selectedIcons.wifi && (
                            <IconButton
                                iconLib="AntDesign"
                                iconName="wifi"
                                iconStyle={[styles.iconsStyle, selectedIcons.wifi && styles.selectedIcon]}
                                isSelected={selectedIcons.wifi}
                                onPress={() => {}}
                                text="WI-FI"
                            />
                        )}
                        {selectedIcons.car && (
                            <IconButton
                                iconLib="AntDesign"
                                iconName="car"
                                iconStyle={[styles.iconsStyle, selectedIcons.car && styles.selectedIcon]}
                                isSelected={selectedIcons.car}
                                onPress={() => {}}
                                text="Estacionamento"
                            />
                        )}
                        {selectedIcons.ac && (
                            <IconButton
                                iconLib="FontAwesome"
                                iconName="thermometer-4"
                                iconStyle={[styles.iconsStyle, selectedIcons.ac && styles.selectedIcon]}
                                isSelected={selectedIcons.ac}
                                onPress={() => {}}
                                text="Ar-Condicionado"
                            />
                        )}
                        {selectedIcons.outdoor && (
                            <IconButton
                                iconLib="Feather"
                                iconName="sun"
                                iconStyle={[styles.iconsStyle, selectedIcons.outdoor && styles.selectedIcon]}
                                isSelected={selectedIcons.outdoor}
                                onPress={() => {}}
                                text="Área ao ar livre"
                            />
                        )}
                    </View>

                    <Text style={styles.title}>Horário de Funcionamento:</Text>
                    <View style={styles.horarioContainer}>
                        <Text style={styles.horarioText}>Segunda a Sexta:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.1 }} />
                            <View style={styles.horario}>
                                <Text style={styles.horarioText}>{horariosFuncionamento.semanaInicio}</Text>
                            </View>
                            <Text style={styles.horarioText}>às</Text>
                            <View style={styles.horario}>
                                <Text style={styles.horarioText}>{horariosFuncionamento.semanaFim}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.horarioContainer}>
                        <Text style={styles.horarioText}>Sábado e Domingo:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.1 }} />
                            <View style={styles.horario}>
                                <Text style={styles.horarioText}>{horariosFuncionamento.fimDeSemanaInicio}</Text>
                            </View>
                            <Text style={styles.horarioText}> às </Text>
                            <View style={styles.horario}>
                                <Text style={styles.horarioText}>{horariosFuncionamento.fimDeSemanaFim}</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.title}>Localização:</Text>
                    <Image
                        source={require('../../../assets/outLoca.png')}
                        style={{ width: '100%', height: 250, marginStart: "5%", marginTop: "10%" }}
                        resizeMode="center"
                    />

                    <Text style={styles.title}>Nosso Cardápio:</Text>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.buttonText}>Cardápio</Text>
                    </TouchableOpacity>

                    <Text style={styles.titleReserv}>Faça sua Reserva:</Text>
                    <TouchableOpacity style={styles.buttonReserv} onPress={() => navigation.navigate('ReservaMesa')}>
                        <Text style={styles.buttonText}>Reservar Mesa</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}
