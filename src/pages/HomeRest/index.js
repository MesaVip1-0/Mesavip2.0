import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    TextInput,
    Modal,
    FlatList
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from 'react-native-masked-text';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import styles from './styles';

const options = [
    'Hamburgueria',
    'Churrascaria',
    'Pizzaria',
    'Fitness',
    'Bar',
    'Japonesa',
];

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
    );
}



export default function HomeRest() {
    const navigation = useNavigation();
    const [selectedIcons, setSelectedIcons] = useState({
        wifi: false,
        car: false,
        ac: false,
        outdoor: false,
        heart: false
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Selecionar Categoria');

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

    const renderOption = ({ item }) => (
        <TouchableOpacity
            style={styles.optionButton}
            onPress={() => {
                setSelectedOption(item);
                setModalVisible(false);
            }}
        >
            <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../HomeCli/outback.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <ScrollView>
                    <TextInput style={styles.title} multiline>Outback SteakHouse</TextInput>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.modalTitle}>
                        <Text style={styles.selectedOption}>{selectedOption}</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Sobre</Text>
                    <TextInput style={styles.subTitle} multiline>
                        A especialidade da casa é a carne, como a costela ao molho barbecue, uma das mais pedidas.
                    </TextInput>
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
                        source={require('../../assets/outLoca.png')}
                        style={{ width: '100%', height: 250, marginStart: "5%", marginTop: "10%" }}
                        resizeMode="center"
                    />

                    <Text style={styles.title}>Nosso Cardápio:</Text>
                    <TouchableOpacity style={styles.Button} onPress={uploadPDF}>
                        <Text style={styles.buttonText}>Upload Cardápio (PDF)</Text>
                    </TouchableOpacity>

                    <Text style={styles.titleReserv}>Faça sua Reserva:</Text>
                    <TouchableOpacity style={styles.buttonReserv}>
                        <Text style={styles.buttonText}>Reservar Mesa</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleIconSelection('heart')} style={styles.heartContainer}>
                        <AntDesign
                            name={selectedIcons.heart ? "heart" : "hearto"}
                            style={[styles.heartStyle, selectedIcons.heart && styles.heartSelected]}
                        />
                    </TouchableOpacity>
                </ScrollView>
            </Animatable.View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <FlatList
                        data={options}
                        renderItem={renderOption}
                        keyExtractor={(item) => item}
                    />
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
