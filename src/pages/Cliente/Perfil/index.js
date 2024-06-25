import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

export default function Perfil() {
    const navigation = useNavigation();
    const [isEditingName, setIsEditingName] = useState(false);
    const [name, setName] = useState('Thiago Justino');

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
                <TouchableOpacity style={styles.image}>
                    <Image
                        source={require('../../../assets/thiago.png')}
                        style={{ width: '100%' }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </Animatable.View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <ScrollView>
                    <View 
                    style={{flexDirection: 'row', 
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
                                <FontAwesome name="pencil" size={24} color="white"  />
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
                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}