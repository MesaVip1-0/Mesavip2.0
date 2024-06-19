import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../../pages/Cliente/Favoritos/styles';


const BtnFavoritados = ({ item, navigation }) => {
    return (
        <View style={styles.btnLogo}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailsCli')}>
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
            </View>

            <View>
                <TouchableOpacity>
                    <FontAwesome name='heart' color='#fe0000' size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default BtnFavoritados;
