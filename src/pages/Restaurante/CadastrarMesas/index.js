import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import CadMesas from "./cadMesas";
import styles from "./styles";

export default function CadastroMesas() {
    const navigation = useNavigation();
    let criarMesas;

    const handleCadastrarPress = () => {
        if (criarMesas) {
            criarMesas();
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Text style={styles.titulo}>Cadastrar Mesas</Text>
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.escolhaDia}>Mesas internas ou externas:</Text>
                    <CadMesas ref={ref => criarMesas = ref && ref.criarMesas} />
                </View>
                <View style={styles.viewBtnConfirma}>
                    <TouchableOpacity style={styles.btnConfirma} onPress={handleCadastrarPress}>
                        <Text>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
