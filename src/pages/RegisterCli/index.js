import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import User from '../../model/User';
import styles from './styles';

export default function RegisterCli() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    function handleSignin() {
        if (name === '' || email === '' || pass === '' || confirmPass === '') {
            alert("Preencha todos os campos");
            return;
        }
        if (pass !== confirmPass) {
            alert("As senhas não conferem");
            return
        }


        // Aqui você faria a chamada HTTP para o backend
        // utilizando o fetch ou axios para enviar os dados
        // de registro para o servidor.
        // Exemplo de chamada com fetch:
        fetch('http://192.168.15.9:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                pass: pass,
                confirmPass: confirmPass
            }),
        })
            .then(response => response.json())
            .then((data) => {
                if (User) {
                    alert("Usuário cadastrado")
                    AcessaHomi()
                }
                console.log('Sucesso:', data);

                // Aqui você pode lidar com a resposta do servidor,
                // redirecionar para outra tela ou exibir uma mensagem de sucesso.
            })

            // .then((res)=> console.log(res))
            //     if(userExists.email = true ){ alert("O Usuário já possui cadastro")
            //     return}
            // })

            .catch((error) => {
                console.error('Erro:', error);
                // Aqui você pode lidar com erros de conexão ou
                // exibir uma mensagem de erro para o usuário.
            });

    }
    const AcessaHomi = () => {
        navigation.navigate("SignIn")
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Registro Cliente</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder="Digite um nome de Usuário"
                    style={styles.input}
                    onChangeText={(text) => setName(text)}
                    value={name}
                />

                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um email"
                    style={styles.input}
                    keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(text) => setPass(text)}
                    value={pass}
                />

                <Text style={styles.title}>Confirmação de Senha</Text>
                <TextInput
                    placeholder="Confirme sua senha"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(text) => setConfirmPass(text)}
                    value={confirmPass}
                />

                <TouchableOpacity style={styles.button} onPress={handleSignin}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.registerText}>Já possui uma conta? Faça Login</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

