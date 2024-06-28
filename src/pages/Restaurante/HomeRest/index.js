import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput, Modal, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import styles from './styles';
import CategoriaRest from '../../../components/CategoriaRest';
import IconButton from '../../../components/IconButton';
import { Feather } from '@expo/vector-icons';
import HorarioFuncRest from '../../../components/HorarioFuncRest';
import { IconSelectionContext } from '../../../components/Context/IconSelectionContext';
import { IP } from '../../IP';

export default function HomeRest() {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [horariosFuncionamento, setHorariosFuncionamento] = useState([
        { diaSemana: 'Segunda', horarioAbertura: '', horarioFechamento: '' },
        { diaSemana: 'Domingo', horarioAbertura: '', horarioFechamento: '' }
    ]);
    const [categoria, setCategoria] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const { selectedIcons, toggleIconSelection } = useContext(IconSelectionContext);
    const navigation = useNavigation();

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    const fetchRestaurantData = async () => {
        try {
            const response = await axios.get(`http://${IP}:3000/restaurante/667a2b55f3d605aadf8355d3`);
            const data = response.data;

            setName(data.name);
            setDesc(data.desc);
            toggleIconSelection('wifi', data.wifi);
            toggleIconSelection('car', data.estacionamento);
            toggleIconSelection('ac', data.arCondicionado);
            toggleIconSelection('outdoor', data.areaExterna);
            setHorariosFuncionamento(data.horariosFuncionamento || []);
            setCategoria(data.categoria || '');
        } catch (error) {
            console.error('Erro ao buscar dados do restaurante:', error);
            alert('Erro ao buscar dados do restaurante');
        }
    };

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

        if (!pickerResult.cancelled) {
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
            const response = await axios.post(`http://${IP}:3000/image`, formData, {
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

                await axios.post(`http://${IP}:3000/upload`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                alert("PDF carregado com sucesso");
            }
        } catch (error) {
            console.error("Erro ao carregar PDF", error);
            alert("Erro ao carregar PDF");
        }
    };

    const handleTimeChange = (day, type, time) => {
        const updatedHorarios = horariosFuncionamento.map((horario) => {
            if (horario.diaSemana === day) {
                return {
                    ...horario,
                    [type === 'start' ? 'horarioAbertura' : 'horarioFechamento']: time
                };
            }
            return horario;
        });
        setHorariosFuncionamento(updatedHorarios);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`http://${IP}:3000/restaurante/667a2b55f3d605aadf8355d3`, {
                name,
                desc,
                wifi: selectedIcons.wifi,
                estacionamento: selectedIcons.car,
                arCondicionado: selectedIcons.ac,
                areaExterna: selectedIcons.outdoor,
                horariosFuncionamento,
                categoria
            });

            alert('Restaurante atualizado com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar restaurante:', error);
            alert('Erro ao atualizar restaurante');
        }
    };

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
                    <TextInput 
                        style={styles.title} 
                        multiline 
                        placeholder='Nome do Restaurante' 
                        placeholderTextColor="grey"
                        onChangeText={setName}
                        value={name}
                    />
                    <CategoriaRest setCategoria={setCategoria} categoria={categoria} />
                    <Text style={styles.title}>Sobre o Restaurante</Text>
                    <TextInput
                        style={styles.subTitle}
                        multiline
                        placeholder='Fale sobre seu Restaurante'
                        placeholderTextColor="grey"
                        onChangeText={setDesc}
                        value={desc}
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
                    <HorarioFuncRest
                        horariosFuncionamento={horariosFuncionamento}
                        onTimeChange={handleTimeChange}
                    />

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

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.modalView}>
                            <View style={styles.modal}>
                                <TouchableOpacity
                                    onPress={() => openImagePickerAsync('camera')}
                                    style={styles.button}
                                >
                                    <Text style={styles.textStyle}>Tire uma foto</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => openImagePickerAsync('gallery')}
                                    style={styles.button}
                                >
                                    <Text style={styles.textStyle}>Escolha uma foto</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setModalVisible(!modalVisible)}
                                    style={styles.button}
                                >
                                    <Text style={styles.textStyle}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    <TouchableOpacity style={styles.buttonReserv} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Salvar Configurações</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}
