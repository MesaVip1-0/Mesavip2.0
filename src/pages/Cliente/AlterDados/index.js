import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';


export default function AlterDados() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


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
                <ScrollView>
                    <View style={styles.container2}>
                        <View style={styles.name}>
                            <Text style={styles.title}>Alterar Dados</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.text1}>Email Atual:</Text>
                            <TouchableOpacity style={styles.inputBtn}>
                                <Text style={styles.text1}>kaua@gmail.com</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.text1}>Novo Email:</Text>
                            {/*botão de input de dados (email)*/}
                            <TouchableOpacity style={styles.inputBtn}>
                                <TextInput
                                    placeholder="Digite o novo email"
                                    style={styles.inputText}
                                    placeholderTextColor="#fff"
                                    keyboardType='email-address'
                                    onChangeText={setEmail}
                                    value={email}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 40 }}>
                        <View>
                            <Text style={styles.text1}>Senha Atual:</Text>
                            <TouchableOpacity style={styles.inputBtn} >
                                <Text style={styles.text1}>1234567</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.text1}>Nova Senha:</Text>
                            {/*botão de input de dados (senha)*/}
                            <TouchableOpacity style={styles.inputBtn}>
                                <TextInput
                                    placeholder="Digite sua nova senha"
                                    placeholderTextColor={"#fff"}
                                    style={styles.inputText}
                                    secureTextEntry={true}
                                    onChangeText={setPass}
                                    value={pass}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* botão de salvar alterações */}
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
                        <TouchableOpacity style={styles.btnStyle}>
                            <Text style={styles.btnText}>Salvar Alterações</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}

