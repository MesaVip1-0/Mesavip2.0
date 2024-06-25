import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Feather, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
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

        
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{alignItems: 'center', justifyContent: 'center', borderBottomWidth: 2, borderColor: "#616161", marginBottom: 30, width: '100%', height: 100, borderRadius:30}}>
                        <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>Configurações</Text>
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

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Histórico')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="history" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>Histórico de Reservas</Text>
                                <Text style={styles.subTitle}>Veja reservas feitas anteriormente</Text>
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

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MesasCadastradas')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="cutlery" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>Editar Mesas</Text>
                                <Text style={styles.subTitle}>Modifique as mesas cadastradas</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:20}}></View>
                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}