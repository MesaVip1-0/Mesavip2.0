import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import styles from '../../pages/Restaurante/HomeRest/styles'; // Certifique-se de importar os estilos adequados


const IconButton = ({ iconLib, iconName, iconStyle, isSelected, onPress, text }) => {
    
    let IconComponent;

    switch (iconLib) {
        case 'FontAwesome':
            IconComponent = FontAwesome;
            break;
        case 'Feather':
            IconComponent = Feather;
            break;
        case 'AntDesign':
        default:
            IconComponent = AntDesign;
            break;
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.iconsContainer}>
            <IconComponent name={iconName} style={[styles.iconsStyle, isSelected && styles.selectedIcon, iconStyle]} />
            <Text style={[styles.subTitleIcon, isSelected && styles.titleIconSelected]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default IconButton;
