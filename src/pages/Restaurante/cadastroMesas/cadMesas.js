import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, TextInput, AsyncStorage } from 'react-native';
import styles from "./styles";

const DateTime = () => {
    const [selectedPeople, setSelectedPeople] = useState(null);
    const [selectedMesa, setSelectedMesa] = useState(null);
    const [customNumberOfPeople, setCustomNumberOfPeople] = useState('');
    const [qntPessoas, setQntPessoas] = useState([
        { key: 'a', image: require('./uma-pessoa1.png') },
        { key: 'b', image: require('./duas-pessoas1.png') },
        { key: 'c', image: require('./tres-pessoas1.png') },
        { key: 'd', image: require('./quatro-pessoas1.png'), customImage: require('./mais-quatro.png') }
    ]);

    const [buttonCount, setButtonCount] = useState(0);
    const [inputVisible, setInputVisible] = useState(false);
    const [numButtons, setNumButtons] = useState('');
    const [selectedButton, setSelectedButton] = useState(null);

    useEffect(() => {
        const loadButtonCount = async () => {
            try {
                const savedButtonCount = await AsyncStorage.getItem('buttonCount');
                if (savedButtonCount !== null) {
                    setButtonCount(parseInt(savedButtonCount, 10));
                }
            } catch (error) {
                console.error('Failed to load button count', error);
            }
        };
        loadButtonCount();
    }, []);

    useEffect(() => {
        const saveButtonCount = async () => {
            try {
                await AsyncStorage.setItem('buttonCount', buttonCount.toString());
            } catch (error) {
                console.error('Failed to save button count', error);
            }
        };
        if (buttonCount > 0) {
            saveButtonCount();
        }
    }, [buttonCount]);

    const handleCreateButtons = () => {
        setButtonCount(buttonCount + parseInt(numButtons, 10));
        setInputVisible(false);
        setNumButtons('');
    };

    const handleSelectPeople = (key) => {
        if (key === 'd') {
            setSelectedPeople('d');
        } else {
            setSelectedPeople(key === selectedPeople ? null : key);
        }
    };

    const handleSelectMesa = (item) => {
        setSelectedMesa(item === selectedMesa ? null : item);
    };

    const handleCustomNumberChange = (text) => {
        if (/^\d+$/.test(text) || text === '') {
            setCustomNumberOfPeople(text);
            setSelectedPeople('d');
        }
    };

    const handleButtonPress = (item) => {
        setSelectedButton(item.key);
        setSelectedMesa(item.key);
    };

    return (
        <>
            <View>
                {buttonCount === 0 && (
                    <TouchableOpacity
                        style={styles.initialButton}
                        onPress={() => setInputVisible(true)}
                    >
                        <Text style={styles.buttonText}>Cadastre suas Mesas</Text>
                    </TouchableOpacity>
                )}

                {inputVisible && (
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter number of buttons"
                            placeholderTextColor="#888"
                            keyboardType="numeric"
                            value={numButtons}
                            onChangeText={setNumButtons}
                        />
                        <TouchableOpacity
                            style={styles.confirmButton}
                            onPress={handleCreateButtons}
                        >
                            <Text style={styles.buttonText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {buttonCount > 0 && (
                    <FlatList
                        data={Array.from({ length: buttonCount + 1 }, (_, i) => ({ key: i.toString() }))}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            item.key === buttonCount.toString() ? (
                                <TouchableOpacity
                                    style={styles.addButton}
                                    onPress={() => setInputVisible(true)}
                                >
                                    <Text style={styles.buttonText}>Adicionar Mais</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    style={[styles.dias, { backgroundColor: item.key === selectedButton ? '#fe0000' : '#373539' }]}
                                    onPress={() => handleButtonPress(item)}
                                >
                                    <Text style={styles.buttonText}>{item.key}</Text>
                                </TouchableOpacity>
                            )
                        )}
                        keyExtractor={item => item.key}
                    />
                )}
            </View>

            <Text style={styles.escolhaHorario}>
                Quantidade de Pessoas:
            </Text>

            <FlatList
                data={qntPessoas}
                horizontal
                scrollEnabled={false}
                contentContainerStyle={{
                    paddingLeft: 20,
                    paddingRight: 20
                }}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.qtdPessoas,
                            { backgroundColor: item.key === selectedPeople ? '#fe0000' : '#373539' }
                        ]}
                        onPress={() => handleSelectPeople(item.key)}
                    >
                        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                            {item.key === 'd' && selectedPeople === 'd' && item.customImage ? (
                                <Image source={item.customImage} style={{ width: 44, height: 44, marginTop: 10 }} />
                            ) : (
                                <Image source={item.image} style={{ width: 50, height: 50 }} />
                            )}
                            {item.key === 'd' && selectedPeople === 'd' ? (
                                <TextInput
                                    style={styles.customInput}
                                    placeholder="Digite a quantidade"
                                    placeholderTextColor="#888"
                                    keyboardType="numeric"
                                    value={customNumberOfPeople}
                                    onChangeText={handleCustomNumberChange}
                                    autoFocus={true} // Foca no TextInput automaticamente quando selecionado
                                />
                            ) : null}
                        </View>
                    </TouchableOpacity>
                )}
            />

            <Text style={styles.escolhaHorario}>
                Mesa:
            </Text>

            <FlatList
                data={['Interna', 'Externa']}
                horizontal
                scrollEnabled={false}
                contentContainerStyle={{
                    paddingLeft: 20,
                    paddingRight: 20
                }}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.mesa,
                            { backgroundColor: item === selectedMesa ? '#fe0000' : '#373539' }
                        ]}
                        onPress={() => handleSelectMesa(item)}
                    >
                        <Text style={{ color: '#fff' }}>{item}</Text>
                    </TouchableOpacity>
                )}
            />

            <View>
                <Text style={styles.indisponivel}>
                    Indisponível
                </Text>
            </View>

            <View style={styles.imgMesas}>
                <View style={styles.imgEx}>
                    <Image
                        source={require('./mesaEx-removebg1.png')}
                        style={{ width: '100%' }}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.imgIn}>
                    <Image
                        source={require('./mesaIn-removebg.png')}
                        style={{ width: '100%' }}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </>
    );
}

export default DateTime;
