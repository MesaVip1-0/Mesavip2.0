import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>

                <Animatable.Image
                    animation={"flipInY"}
                    delay={400}
                    source={require('../../assets/logoTCC.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />

            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Reserve sua mesa de qualquer lugar!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <SafeAreaView style={styles.btnFix}>
                    <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.buttonText}>Cliente</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('SignInRest')}>
                        <Text style={styles.buttonText}>Restaurante</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </Animatable.View>
        </View>
    );
}
