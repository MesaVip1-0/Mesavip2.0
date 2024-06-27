import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../pages/Cliente/HomeCli/styles';
import { useNavigation } from '@react-navigation/native';
import Rest from '../../model/Rest';

const RestItem = ({ item }) => {
    item.params
    const navigation = useNavigation();
    return (
        <View style={styles.containerRest}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailsCli')}>
                <Image style={styles.image} source={require('../../pages/Cliente/HomeCli/outback.png')} />
            </TouchableOpacity>
            <Text style={styles.description}>
                {item.name}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
                {`${item.rua}, ${item.numero} - ${item.bairro}, ${item.cidade}`}
            </Text>
            <Text style={styles.description}>
                {item.categoria}
            </Text>
        </View>
    );
};

export default RestItem;
