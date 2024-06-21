// ProdItem.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../pages/Cliente/HomeCli/styles';
import { useNavigation } from '@react-navigation/native';

const ProdItem = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.containerRest}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailsCli')}>
                <Image style={styles.image} source={item.img_rest}/>
            </TouchableOpacity>
            <Text style={styles.description}>
                {item.name_produto}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
                {item.descricao_produto}
            </Text>
        </View>
    );
};

export default ProdItem;
