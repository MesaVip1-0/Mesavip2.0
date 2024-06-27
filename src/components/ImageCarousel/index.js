import React, { useRef, useEffect, useState } from 'react';
import { View, Image, Dimensions, StyleSheet, FlatList } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const ImageCarousel = ({ images }) => {
    const flatListRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);

    // Função para avançar para a próxima imagem
    const handleNext = () => {
        if (currentPage < images.length - 1) {
            flatListRef.current.scrollToIndex({ animated: true, index: currentPage + 1 });
            setCurrentPage(currentPage + 1);
        } else {
            // Se estiver na última imagem, volta para a primeira
            flatListRef.current.scrollToIndex({ animated: true, index: 0 });
            setCurrentPage(0);
        }
    };

    // Função para voltar para a imagem anterior
    const handlePrev = () => {
        if (currentPage > 0) {
            flatListRef.current.scrollToIndex({ animated: true, index: currentPage - 1 });
            setCurrentPage(currentPage - 1);
        } else {
            // Se estiver na primeira imagem, vai para a última
            flatListRef.current.scrollToIndex({ animated: true, index: images.length - 1 });
            setCurrentPage(images.length - 1);
        }
    };

    // Mudança automática de imagem a cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentPage]);

    const renderImage = ({ item }) => {
        return (
            <Image
                source={item}
                style={styles.image}
                resizeMode="cover"
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={images}
                renderItem={renderImage}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                onMomentumScrollEnd={(event) => {
                    const newIndex = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
                    setCurrentPage(newIndex);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: 250,
        marginStart:'5%',
        marginTop:'10%'
    },
    image: {
        width: screenWidth,
        height: 250,
    },
});

export default ImageCarousel;
