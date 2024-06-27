import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import CadMesas from "./cadMesas";
import styles from "./styles"

export default function CadastroMesas() {

    const navigation = useNavigation();


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.containerLogo}>
                <Text style={styles.titulo}>Cadastrar Mesas</Text>
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.escolhaDia}>Mesas internas ou externas:</Text>
                    <CadMesas />
                </View>

                <View style={styles.viewBtnConfirma}>
                    <TouchableOpacity style={styles.btnConfirma} onPress={() => navigation.navigate('MesasCadastradas')}>
                        <Text>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


