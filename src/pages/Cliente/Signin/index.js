import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import {IP} from '../../IP';

export default function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function logandoUser() {
        console.log('Iniciando processo de login');

        if (email === '') {
            Alert.alert("Digite seu e-mail");
            return;
        } else if (pass === '') {
            Alert.alert("Digite sua senha");
            return;
        }


        fetch(`http://${IP}:3000/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                pass: pass,
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Resposta da API recebida');
                console.log('Dados recebidos:', data);

                if (data.token) {
                    navigation.navigate("HomeCli", { token: data.token }); // Passa o token para a próxima tela
                } else {
                    throw new Error('Token não recebido');
                }
            })
            .catch(error => {
                console.error('Erro no login:', error);
                Alert.alert('Erro', 'Não foi possível realizar o login');
            });
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message} onPress={() => navigation.navigate('Welcome')}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um email"
                    style={styles.input}
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={setPass}
                />

                <TouchableOpacity style={styles.button} onPress={logandoUser}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('RegisterCli')}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

