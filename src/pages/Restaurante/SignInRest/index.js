import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';
import styles from './styles';

export default function SignInRest() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    function logandoRest() {
        console.log('If Teste');
        if (email === '' || pass === '') {
            alert("Todos os campos devem ser preenchidos");
            return;
        } else if (email === '') {
            alert("Digite seu e-mail");
            return;
        } else if (pass === '') {
            alert("Digite sua senha");
            return;
        }


        fetch('http://192.168.15.9:3000/auth/login_rest', {
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
                console.log('Login bem-sucedido:', data);
                if (data.token) {

                    AcessaHomi()
                }

                // fetchUserData(data.token);

            })
            .catch(error => console.error('Erro no login:', error));
    }
    const AcessaHomi = () => {
        navigation.navigate("HomeCli")
    }
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader} >
                <Text style={styles.message} onPress={() => navigation.navigate('Welcome')}>Restaurante</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um email"
                    style={styles.input}
                    keyboardType='email-address'
                    onChangeText={setEmail}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={setPass}
                    value={pass}
                />

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(logandoRest)}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('RegisterRest')}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}
