import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'

export default function Cartoes() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.txtTitle}>Cartões Cadastrados</Text>
            </View>
            <SafeAreaView>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name="creditcard" style={styles.iconsStyle} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.cardDebit}>Cartões de Crédito</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name="creditcard" style={styles.iconsStyle} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.cardDebit}>Cartões de Débito</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', height: 40, marginTop: 20, alignItems: 'center' }}>
                    <View style={{
                        width: 80, height: 50, // altura da imagem
                        borderRadius: 25, backgroundColor: '#8b01bf',
                        justifyContent: 'center',
                        alignItems: 'center', marginLeft: 20
                    }}>
                        <Image
                            source={require('../../assets/nubank-logo.png')}
                            style={{ width: 50, height: 40 }}
                            resizeMode='contain'
                        />
                    </View>
                    <Text style={{ color: '#fff', fontSize: 20, marginLeft: 15, fontWeight: 'bold' }}>4555-3999-2111-1777</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.btnCad}>
                        <Text style={styles.txtBtn}>Cadastrar Cartão</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaView>

    )
}
