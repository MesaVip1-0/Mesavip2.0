import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import styles from '../../pages/Restaurante/HomeRest/styles';

const CategoriaRest = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Selecionar Categoria');

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
                setSelectedOption(item);
                setModalVisible(false);
            }}
        >
            <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.modalTitle}>
                <Text style={styles.selectedOption}>{selectedOption}</Text>
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


{/* <View style={styles.modalView}>
            <FlatList
                data={options}
                renderItem={renderOption}
                keyExtractor={(item) => item}
            />
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
            >
                <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
        </View> */}