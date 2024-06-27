import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import styles from "./styles";

const CadMesas = () => {
    const [selectedPeople, setSelectedPeople] = useState(null);
    const [selectedMesa, setSelectedMesa] = useState(null);
    const [selectedDispo, setSelectedDispo] = useState(null);
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
    const [selectedQntMesas, setSelectedQntMesas] = useState([]);

    const handleSelectQntMesas = (item) => {
        const key = item.key;
        let updatedSelectedQntMesas = [...selectedQntMesas];

        if (updatedSelectedQntMesas.includes(key)) {
            // Botão já está selecionado, desselecionar
            updatedSelectedQntMesas = updatedSelectedQntMesas.filter(btnKey => btnKey !== key);
        } else {
            // Determinar intervalo de seleção automática
            let start = null;
            let end = null;

            if (updatedSelectedQntMesas.length === 0) {
                start = parseInt(key);
                end = parseInt(key);
            } else {
                const lastSelected = parseInt(updatedSelectedQntMesas[updatedSelectedQntMesas.length - 1]);
                start = Math.min(lastSelected, parseInt(key));
                end = Math.max(lastSelected, parseInt(key));
            }

            // Selecionar todos os botões no intervalo
            for (let i = start; i <= end; i++) {
                if (!updatedSelectedQntMesas.includes(i.toString())) {
                    updatedSelectedQntMesas.push(i.toString());
                }
            }
        }

        setSelectedQntMesas(updatedSelectedQntMesas.sort((a, b) => parseInt(a) - parseInt(b)));
    };


    const handleCreateButtons = () => {
        setButtonCount(buttonCount + parseInt(numButtons, 10));
        setInputVisible(false);
        setNumButtons('');
    };

    const handleSelectMesa = (item) => {
        setSelectedMesa(selectedMesa === item.key ? null : item.key);
    };

    const handleSelectDispo = (item) => {
        setSelectedDispo(selectedDispo === item ? null : item);
    };

    const handleSelectPeople = (key) => {
        if (key === 'd') {
            setSelectedPeople('d');
        } else {
            setSelectedPeople(selectedPeople === key ? null : key);
        }
    };

    const handleCustomNumberChange = (text) => {
        if (/^\d+$/.test(text) || text === '') {
            setCustomNumberOfPeople(text);
            setSelectedPeople('d');
        }
    };

    

    return (
        <View style={{ flex: 1 }}>
            {/* FlatList para selecionar uma mesa por vez */}
            <FlatList
                data={[
                    { key: 'a', image: require('./mesaEx-removebg1.png') },
                    { key: 'b', image: require('./mesaIn-removebg.png') }
                ]}
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
                            styles.mesa,
                            { backgroundColor: item.key === selectedMesa ? '#fe0000' : '#373539' }
                        ]}
                        onPress={() => handleSelectMesa(item)}
                    >
                        <Image
                            source={item.image}
                            style={{ width: 100, height: 100 }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            />

            <Text style={styles.escolhaHorario}>
                Adicione um número de mesas:
            </Text>

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
                            placeholder="Número de mesas"
                            placeholderTextColor="#888"
                            keyboardType="numeric"
                            value={numButtons}
                            onChangeText={setNumButtons}
                        />
                        <TouchableOpacity
                            style={styles.confirmButton}
                            onPress={handleCreateButtons}
                        >
                            <Text style={styles.buttonText}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {buttonCount > 0 && (
                    <FlatList
                    data={Array.from({ length: buttonCount + 1 }, (_, i) => ({ key: (i + 1).toString() }))}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingLeft: 20,
                        paddingRight: 20
                    }}
                    renderItem={({ item }) => (
                        item.key === (buttonCount + 1).toString() ? (
                            <TouchableOpacity
                                style={[styles.dias, { backgroundColor:'#fe0000' }]} // Estilo similar aos botões da FlatList
                                onPress={() => setInputVisible(true)}
                            >
                                <Text style={[styles.buttonText, {fontSize: 25}]}>+</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={[styles.dias, { backgroundColor: selectedQntMesas.includes(item.key) ? '#fe0000' : '#373539' }]}
                                onPress={() => handleSelectQntMesas(item)}
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
                                    keyboardType="numeric"
                                    value={customNumberOfPeople}
                                    onChangeText={handleCustomNumberChange}
                                    autoFocus={true}
                                />
                            ) : null}
                        </View>
                    </TouchableOpacity>
                )}
            />

            <Text style={styles.escolhaHorario}>
                Disponibilidade das mesas:
            </Text>


            <FlatList
                data={['60 Minutos', '120 Minutos']}
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
                            styles.disponibilidade,
                            { backgroundColor: item === selectedDispo ? '#fe0000' : '#373539' }
                        ]}
                        onPress={() => handleSelectDispo(item)}
                    >
                        <Text style={{ color: '#fff' }}>{item}</Text>
                    </TouchableOpacity>
                )}
            />


        </View>
    );
}

export default CadMesas;
