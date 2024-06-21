import React from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';

const FotosRest = ({ imagens }) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
                {imagens.map((imagem, index) => (
                    <View key={index} style={styles.imagemContainer}>
                        <Image
                            source={imagem}
                            style={styles.imagem}
                            resizeMode="cover"
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 250,
    },
    imagemContainer: {
        width: '100%',
        height: 250,
    },
    imagem: {
        width: '100%',
        height: '100%',
    },
});

export default FotosRest;
