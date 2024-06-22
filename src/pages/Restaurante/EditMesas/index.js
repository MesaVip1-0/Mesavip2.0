import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import styles from "./styles";
import EditMesas from "./EditMesas"

export default function EditarMesas() {

    const navigation = useNavigation();


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.containerLogo}>

                {/* Botão de voltar para a esquerda no canto superior esquerdo do logo */}
                <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('DetailsCli')}>
                    <AntDesign name="arrowleft" style={styles.return} />
                </TouchableOpacity>
                <Text style={styles.titulo}>Editar Mesas</Text>

            </View>
            <ScrollView>
                <View>
                    <Text style={styles.escolhaDia}>Mesas internas ou externas:</Text>
                    <EditMesas />
                </View>

                <View style={styles.viewBtnConfirma}>
                    <TouchableOpacity style={styles.btnConfirma} onPress={() => navigation.navigate('MesasCadastradas')}>
                        <Text>EDITAR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


