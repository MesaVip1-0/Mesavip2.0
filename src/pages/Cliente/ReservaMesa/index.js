import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import styles from "./styles";
import DateTime from "./dateTime"

export default function ReservaMesa() {

    const navigation = useNavigation();


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.containerLogo}>
                {/* Exibindo a imagem do logo */}
                <Image
                    source={require('./outbackBanner.jpg')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />

                {/* Botão de voltar para a esquerda no canto superior esquerdo do logo */}
                <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('DetailsCli')}>
                    <AntDesign name="arrowleft" style={styles.return} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.escolhaDia}>Escolha o Dia:</Text>
                    <DateTime />
                </View>

                <View style={styles.viewBtnConfirma}>
                    <TouchableOpacity style={styles.btnConfirma} onPress={() => navigation.navigate('MesasDispo')}>
                        <Text>CONFIRMAR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


