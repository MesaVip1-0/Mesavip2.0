import React from 'react';
import { TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from '../../pages/Restaurante/HomeRest/styles'; // Certifique-se de importar os estilos adequados

const TextMask = (props) => {
    return (
        <TextInputMask
            style={styles.horarioText}
            type={'datetime'}
            options={{
                format: 'HH:mm'
            }}
            value={props.value}
            onChangeText={(text) => {
                const isValidTime = /^([01][0-9]|2[0-3]):([0-5][0-9])$/.test(text);
                if (isValidTime) {
                    console.log(`Horário válido: ${text}`);
                } else {
                    console.log(`Horário inválido: ${text}`);
                }
            }}
        />
    );
};

export default TextMask;
