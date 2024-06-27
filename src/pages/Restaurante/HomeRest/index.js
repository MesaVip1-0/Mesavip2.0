import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, Modal, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import styles from './styles';
import CategoriaRest from '../../../components/CategoriaRest';
import IconButton from '../../../components/IconButton';
import HorarioFuncRest from '../../../components/HorarioFuncRest';

export default function HomeRest() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedIcons, setSelectedIcons] = useState({
        wifi: false,
        car: false,
        ac: false,
        outdoor: false
    });


    useEffect(() => {
        // Carregar imagem do backend ao carregar a tela
        const fetchUserImage = async () => {
            try {
                const response = await axios.get(`http://192.168.15.9:3000/image`);
                setSelectedImage(response.data.imageUrl);
            } catch (error) {
                console.error("Error fetching user image", error);
            }
        };

        fetchUserImage();
    }, []);

    const openImagePickerAsync = async (mediaType) => {
        let permissionResult;
        if (mediaType === 'camera') {
            permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        } else {
            permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        }

        if (!permissionResult.granted) {
            Alert.alert('Permissão negada para acessar a câmera/galeria');
            return;
        }

        let pickerResult;
        if (mediaType === 'camera') {
            pickerResult = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
        } else if (mediaType === 'gallery') {
            pickerResult = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
        }

        if (!pickerResult.canceled) {
            const imageUri = pickerResult.assets[0].uri;
            setSelectedImage(imageUri);
            await uploadImage(imageUri);
            setModalVisible(false);
        }
    };

    const uploadImage = async (uri) => {
        const formData = new FormData();
        formData.append("file", {
            uri: uri,
            type: "image/jpeg",
            name: "profile.jpg",
        });

        try {
            const response = await axios.post(`http://192.168.15.9:3000/image`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            Alert.alert("Imagem enviada com sucesso");
        } catch (error) {
            console.error("Erro ao enviar imagem", error);
            Alert.alert("Erro ao enviar imagem");
        }
    };

    const toggleIconSelection = (icon) => {
        setSelectedIcons((prevSelectedIcons) => ({
            ...prevSelectedIcons,
            [icon]: !prevSelectedIcons[icon],
        }));
    };

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.containerLogo} onPress={() => setModalVisible(true)}>

                <Feather name='camera' color={'#fff'} size={22} />
                <Text style={{ paddingTop: 2, color: '#fff' }}>Adicionar Foto</Text>
                {selectedImage && (
                    <Image
                        source={{ uri: selectedImage }}
                        style={{ width: '100%', height: 250, marginTop: 20 }}
                        resizeMode="cover"
                    />
                )}

            </TouchableOpacity>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <ScrollView>
                    <TextInput style={styles.title} multiline placeholder='Nome do Restaurante' placeholderTextColor="grey"></TextInput>
                    <CategoriaRest />
                    <Text style={styles.title}>Sobre o Restaurante</Text>
                    <TextInput
                        style={styles.subTitle}
                        multiline
                        placeholder='Fale sobre seu Restaurante'
                        placeholderTextColor="grey"
                    />
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
                    <HorarioFuncRest />

                    <Text style={styles.title}>Localização:</Text>
                    <Image
                        source={require('../../../assets/outLoca.png')}
                        style={{ width: '100%', height: 250, marginStart: "5%", marginTop: "10%" }}
                        resizeMode="center"
                    />

                    <Text style={styles.title}>Nosso Cardápio:</Text>
                    <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('TesteImg')}>
                        <Text style={styles.buttonText}>Upload Cardápio (PDF)</Text>
                    </TouchableOpacity>

                    <Text style={styles.title}>Fotos:</Text>
                    {selectedImage && (
                        <Image
                            source={{ uri: selectedImage }}
                            style={{ width: '100%', height: 250, marginTop: 20 }}
                            resizeMode="cover"
                        />
                    )}

                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: 300, backgroundColor: 'white', borderRadius: 15, height: 45, gap: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 5, flexDirection: 'row' }}>
                        <Feather name='camera' color={'#333'} size={22} />
                        <Text style={{ paddingTop: 2 }}>Adicionar Foto</Text>
                    </TouchableOpacity>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <TouchableOpacity onPress={() => openImagePickerAsync('camera')} style={styles.modalButton}>
                                    <Feather name='camera' color={'#333'} size={22} />
                                    <Text style={{ paddingTop: 2 }}>Câmera</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => openImagePickerAsync('gallery')} style={styles.modalButton}>
                                    <Feather name='image' color={'#333'} size={22} />
                                    <Text style={{ paddingTop: 2 }}>Galeria</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                                    <Text style={{ paddingTop: 2 }}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}
