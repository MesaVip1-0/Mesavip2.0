import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

export default function Perfil() {
    const navigation = useNavigation();
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);
    const [name, setName] = useState('Thiago Justino');

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

    const handleEditName = () => {
        setIsEditingName(true);
    };

    const handleNameChange = (text) => {
        setName(text);
    };

    const handleNameSubmit = () => {
        setIsEditingName(false);
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../../assets/comida.jpg')}
                    style={{ width: '100%' }}
                    resizeMode="repeat"
                />
            </View>

            <Animatable.View delay={1000} animation="fadeIn" style={styles.imageView}>
                <TouchableOpacity style={styles.image} onPress={() => setModalVisible(true)}>
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
            </Animatable.View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <ScrollView>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 30
                        }}>
                        <View style={styles.container2}>
                            <View style={styles.nameContainer}>
                                {isEditingName ? (
                                    <TextInput
                                        style={styles.textInput}
                                        value={name}
                                        onChangeText={handleNameChange}
                                        onBlur={handleNameSubmit}
                                        autoFocus
                                    />
                                ) : (
                                    <Text style={styles.text1}>{name}</Text>
                                )}

                            </View>

                        </View>
                        <TouchableOpacity onPress={handleEditName} >
                            <FontAwesome name="pencil" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="phone" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>Telefone</Text>
                                <TextInput style={styles.subTitle}>+55 (11) 94035-7986</TextInput>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Cartoes')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="credit-card" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>Pagamento</Text>
                                <Text style={styles.subTitle}>Formas de Recebimento</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="bell" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>Notificações</Text>
                                <Text style={styles.subTitle}>Gerencie suas notificações</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AlterDados')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="edit-3" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>Alterar Dados</Text>
                                <Text style={styles.subTitle}>Altere seu e-mail e senha</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="comment-question-outline" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>FAQ</Text>
                                <Text style={styles.subTitle}>Perguntas Frequentes</Text>
                            </View>
                        </View>
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