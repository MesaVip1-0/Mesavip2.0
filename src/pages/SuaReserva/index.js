import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';


export default function SuaReserva() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.txtTitle}>Sua Reserva</Text>
            </View>
            <View style={styles.bah}>
                <View>
                    <TouchableOpacity style={styles.btnMesa}>
                        <Image style={styles.img_mesa} source={require('./mesa-interna.png')}></Image>
                        <View style={styles.bah1}><Text style={styles.txtBtn}>Mesa Interna 10</Text></View>
                        <View style={styles.pencil}>
                            <FontAwesome name='pencil' color='#fff' size={40} style={{ margin: 1 }} />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* <TouchableOpacity style={styles.btnMesa}>
                    <Image style={styles.img_mesa}></Image>
                    <View style={styles.bah}><Text style={styles.txtBtn}>Mesa Interna 10</Text></View>
                    <View style={styles.pencil}>
                        <FontAwesome name='pencil' color='#fff' size={50} style={{ margin: 1 }} />
                    </View>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    );
};

