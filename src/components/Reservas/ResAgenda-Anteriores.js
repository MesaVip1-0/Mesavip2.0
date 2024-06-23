import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import styles from '../../pages/Cliente/Reserva/styles';


const ResAgenda = ({ item, navigation }) => {
    return (
        <View style={styles.btnLogo}>
            <TouchableOpacity onPress={() => navigation.navigate('SuaReserva')}>
                {/* IMAGEM LOGO */}
                <Image
                    style={styles.image}
                    source={item.img_logo}
                />
            </TouchableOpacity>

            {/* DESCRIÇÃO DO FAVORITADO */}
            <View style={styles.viewDescription}>
                <Text style={styles.descriptionTxt}>
                    {item.nome_produto}
                </Text>

                {/* SUB DESCRIÇÃO */}
                <Text style={styles.subDescripition}>
                    {item.descricao}
                </Text>
            </View>
        </View>
    );
}

export default ResAgenda;