import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import styles from './styles';
import CategoriaRest from '../../../components/CategoriaRest';
import TextMask from '../../../components/TextMask';
import IconButton from '../../../components/IconButton';


export default function HomeRest() {
    const [selectedIcons, setSelectedIcons] = useState({
        wifi: false,
        car: false,
        ac: false,
        outdoor: false
    });


    const toggleIconSelection = (icon) => {
        setSelectedIcons((prevSelectedIcons) => ({
            ...prevSelectedIcons,
            [icon]: !prevSelectedIcons[icon],
        }));
    };

    const uploadPDF = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: "application/pdf",
            });

            if (result.type === "success") {
                const formData = new FormData();
                formData.append("file", {
                    uri: result.uri,
                    type: "application/pdf",
                    name: result.name,
                });

                await axios.post("http://192.168.0.7:3000/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                alert("PDF uploaded successfully");
            }
        } catch (error) {
            console.error("Error uploading PDF", error);
            alert("Error uploading PDF");
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../Cliente/HomeCli/outback.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <ScrollView>
                    <TextInput style={styles.title} multiline>Outback SteakHouse</TextInput>
                    <CategoriaRest/>
                    <Text style={styles.title}>Sobre</Text>
                    <TextInput style={styles.subTitle} multiline>
                        A especialidade da casa é a carne, como a costela ao molho barbecue, uma das mais pedidas.
                    </TextInput>
                    <Text style={styles.title}>Temos</Text>
                    <View style={styles.iconsContainerList}>
                    <IconButton
                            iconLib="AntDesign"
                            iconName="wifi"
                            iconStyle={[styles.iconsStyle, selectedIcons.wifi && styles.selectedIcon]}
                            isSelected={selectedIcons.wifi}
                            onPress={() => toggleIconSelection('wifi')}
                            text="WI-FI"
                        />
                        <IconButton
                            iconLib="AntDesign"
                            iconName="car"
                            iconStyle={[styles.iconsStyle, selectedIcons.car && styles.selectedIcon]}
                            isSelected={selectedIcons.car}
                            onPress={() => toggleIconSelection('car')}
                            text="Estacionamento"
                        />
                        <IconButton
                            iconLib="FontAwesome"
                            iconName="thermometer-4"
                            iconStyle={[styles.iconsStyle, selectedIcons.ac && styles.selectedIcon]}
                            isSelected={selectedIcons.ac}
                            onPress={() => toggleIconSelection('ac')}
                            text="Ar-Condicionado"
                        />
                        <IconButton
                            iconLib="Feather"
                            iconName="sun"
                            iconStyle={[styles.iconsStyle, selectedIcons.outdoor && styles.selectedIcon]}
                            isSelected={selectedIcons.outdoor}
                            onPress={() => toggleIconSelection('outdoor')}
                            text="Área ao ar livre"
                        />
                    </View>

                    <Text style={styles.title}>Horário de Funcionamento:</Text>
                    <View style={styles.horarioContainer}>
                        <Text style={styles.horarioText}>Segunda a Sexta:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.1 }} />
                            <View style={styles.horario}>
                                <TextMask />
                            </View>
                            <Text style={styles.horarioText}>à</Text>
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
                            <Text style={styles.horarioText}> à </Text>
                            <View style={styles.horario}>
                                <TextMask />
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
                    <TouchableOpacity style={styles.Button} onPress={uploadPDF}>
                        <Text style={styles.buttonText}>Upload Cardápio (PDF)</Text>
                    </TouchableOpacity>

                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}
