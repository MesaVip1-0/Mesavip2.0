// FilterModal.js
import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from '../../pages/Cliente/HomeCli/styles';

const FilterModal = ({ modalVisible, setModalVisible, orderByAZ, handleOrderClick, categories, handleCategoryClick, selectedCategory }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.containerFilter}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Filtrar por:</Text>
                    <TouchableOpacity
                        style={[
                            styles.categoryBtn, orderByAZ && {
                                backgroundColor: 'red', borderWidth: 1, borderColor: '#fff'
                            }
                        ]}
                        onPress={handleOrderClick}>
                        <Text
                            style={[
                                styles.categoryText, orderByAZ && {
                                    color: '#fff'
                                }
                            ]}>A a Z</Text>
                    </TouchableOpacity>
                    {
                        categories.map((category, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.categoryBtn}
                                onPress={() => handleCategoryClick(category)}>
                                <Text
                                    style={[
                                        styles.categoryText, selectedCategory === category && {
                                            color: 'red'
                                        }
                                    ]}>
                                    {category}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                    <TouchableOpacity
                        style={styles.buttonClose}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default FilterModal;