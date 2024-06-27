import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import styles from './styles';
import CategoriaRest from '../../../components/CategoriaRest';
import IconButton from '../../../components/IconButton';
import HorarioFuncRest from '../../../components/HorarioFuncRest'; // Importe o componente de horários diretamente
import { IP } from '../../IP';

export default function HomeRest() {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [selectedIcons, setSelectedIcons] = useState({
        wifi: false,
        car: false,
        ac: false,
        outdoor: false
    });
    const [horariosFuncionamento, setHorariosFuncionamento] = useState([
        { diaSemana: 'Segunda', horarioAbertura: '', horarioFechamento: '' },
        { diaSemana: 'Domingo', horarioAbertura: '', horarioFechamento: '' }
    ]); // Estado inicial dos horários de funcionamento
    const [categoria, setCategoria] = useState('');
    const navigation = useNavigation();




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




    const fetchRestaurantData = async () => {
        try {
            const response = await axios.get(`http://${IP}:3000/restaurante/667a2b55f3d605aadf8355d3`);
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

    useEffect(() => {
        fetchRestaurantData();
    }, []);

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
                    <View style={{ padding: 20 }}>
                        <HorarioFuncRest title="Segunda a sexta" betweenText="    " onTimeChange={handleTimeChange} />
                        <HorarioFuncRest title="Sábado e Domingo" betweenText="" onTimeChange={handleTimeChange} />
                        
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
