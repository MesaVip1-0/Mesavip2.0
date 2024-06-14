import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles'

export default function Cartoes() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text styles={styles.txtTitle}>Cartões</Text>
            </View>
            <SafeAreaView>
                <View>
                    <TouchableOpacity style={styles.btnCad}>
                        <Text style={styles.txtBtn}>Cadastrar Cartão</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaView>

    )
}
