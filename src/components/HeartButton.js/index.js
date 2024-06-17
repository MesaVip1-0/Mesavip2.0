import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../../pages/Cliente/DetailsCli/styles'; // Certifique-se de importar os estilos adequados

const HeartButton = ({ isSelected, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.heartContainer}>
            <AntDesign
                name={isSelected ? "heart" : "hearto"}
                style={[styles.heartStyle, isSelected && styles.heartSelected]}
            />
        </TouchableOpacity>
    );
};

export default HeartButton;
