import React, { useState, useEffect }from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, Image, ScrollView } from 'react-native';
import styles from '../../pages/Cliente/MesasDispo/styles';


const BtnEscolherMesa = ({ item }) => {
    return (
        <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btnMesa}>
                <Image style={styles.img_mesa} source={require('../../pages/Cliente/MesasDispo/mesa-interna.png')}></Image>
                <View style={styles.text}><Text style={styles.txtBtn}>{item.descricao}</Text></View>
            </TouchableOpacity>
    </View>
    );
};

export default BtnEscolherMesa;