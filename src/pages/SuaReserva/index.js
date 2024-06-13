import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';


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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414'
    },
    title: {
        borderWidth: 1,
        borderTopColor: '#141414',
        borderBottomColor: '#a2a2a2',
        borderRightColor: '#141414',
        borderLeftColor: '#141414',
        borderRadius: 10,
        width: '65%',
        alignSelf: 'center',
        marginTop: 10,
    },
    txtTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
        textAlign: 'center',
    },
    btnMesa: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    txtBtn: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 17,
        padding: 10,
        width: '50%',
        alignSelf: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    pencil: {
        width: 50,
        alignItems: 'center',
        marginLeft: -50


    },
    img_mesa: {
        height: 50,
        width: 50,
        marginRight: -50
    },
    bah: {
        marginTop: 50,
        width: '90%',
        height: "12.9%",
        backgroundColor: '#a2a2a2',
        borderRadius: 10,
        margin: 'auto',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#fff',
        opacity: 0.8


    },
    bah1: {
        width: 300,
        opacity:1
    }
})