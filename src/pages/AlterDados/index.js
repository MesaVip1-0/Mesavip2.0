import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign, FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const width = Dimensions.get('window').width;

export default function AlterDados() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    

            return (
                <SafeAreaView style={styles.container}>
                    <View style={styles.containerLogo}>
                        <Image
                            source={require('../../assets/comida.jpg')}
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
                                {/* <View>
                                    <Text style={styles.text1}>Senha Atual:</Text>
                                    <TouchableOpacity style={styles.inputBtn} >
                                        <Text style={styles.text1}>1234567</Text>
                                    </TouchableOpacity>
                                </View> */}
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

        const styles = StyleSheet.create({
            container: {
                flex: 1,
            },
            container2: {
                margin: 40,
                marginTop: 10,
                borderBottomWidth: 1,
                borderColor: '#a2a2a2',
                borderRadius: 1,
            },
            containerLogo: {
                flex: 0.1,
            },
            containerForm: {
                flex: 1,
                backgroundColor: '#141414',
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                borderWidth: 3,
                borderBottomColor: '#141414',
                borderLeftColor: '#fff',
                borderRightColor: '#fff',
                borderTopColor: '#fff',
                paddingEnd: '5%',
            },
            title: {
                color: '#fff',
                fontSize: 24,
                fontWeight: 'bold',
                marginTop: 15,
                paddingStart: '5%',
                textAlign: 'center',
            },
            text1: {
                color: '#fff',
                fontSize: 17,
                padding: 9,
            },
            btnStyle: {
                backgroundColor: '#8E1515',
                borderRadius: 10,
                padding: 10,
                width: '70%',
                justifyContent: 'flex-end'
            },
            btnText: {
                color: '#fff',
                fontSize: 20,
                textAlign: 'center'
            },
            inputText: {
                fontSize: 16,
                color: '#fff',
                height: 36,
                paddingLeft: 10,
            },
            inputBtn: {
                backgroundColor: '#a2a2a2',
                borderRadius: 12,
                width: '97%',
                height: 40,
                opacity: 0.3,
                marginLeft: 10
            },
        })