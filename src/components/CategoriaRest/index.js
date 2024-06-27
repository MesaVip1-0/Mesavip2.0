import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import styles from './styles';

const CategoriaRest = ({ setCategoria, categoria }) => {
    const [modalVisible, setModalVisible] = useState(false);


    const options = [
        'Hamburgueria',
        'Churrascaria',
        'Pizzaria',
        'Fitness',
        'Bar',
        'Japonesa',
    ];

    const renderOption = ({ item }) => (
        <TouchableOpacity
            style={styles.optionButton}
            onPress={() => {
                setCategoria(item);  // Atualiza a categoria no componente pai (HomeRest)

                setModalVisible(false);
            }}
        >
            <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.modalTitle}>
                <Text style={styles.selectedOption}>{categoria || 'Selecionar Categoria'}</Text>

            </TouchableOpacity>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <FlatList
                        data={options}
                        renderItem={renderOption}
                        keyExtractor={(item) => item}
                    />
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.closeButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
};

export default CategoriaRest;
