import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import styles from "./styles";
import { IP } from "../../IP";

let pessoas = 0;
let mesa = '';
let mesasSelecionadas = [];
let primeiraMesa = '';
let ultimaMesa = '';

const CadMesas = forwardRef((props, ref) => {
    const [selectedPeople, setSelectedPeople] = useState(null);
    const [selectedMesa, setSelectedMesa] = useState(null);
    const [selectedDispo, setSelectedDispo] = useState(null);
    const [customNumberOfPeople, setCustomNumberOfPeople] = useState('');
    const [qntPessoas, setQntPessoas] = useState([
        { key: 'a', image: require('./uma-pessoa1.png'), value: 1 },
        { key: 'b', image: require('./duas-pessoas1.png'), value: 2 },
        { key: 'c', image: require('./tres-pessoas1.png'), value: 3 },
        { key: 'd', image: require('./quatro-pessoas1.png'), value: 'custom', customImage: require('./mais-quatro.png') }
    ]);
    const [buttonCount, setButtonCount] = useState(0);
    const [inputVisible, setInputVisible] = useState(false);
    const [numButtons, setNumButtons] = useState('');
    const [selectedQntMesas, setSelectedQntMesas] = useState([]);

    useEffect(() => {
        pessoas = getSelectedPeopleValue();
    }, [selectedPeople, customNumberOfPeople]);

    useEffect(() => {
        mesa = getSelectedMesaValue();
    }, [selectedMesa]);

    useEffect(() => {
        mesasSelecionadas = selectedQntMesas;
        if (selectedQntMesas.length > 0) {
            primeiraMesa = selectedQntMesas[0];
            ultimaMesa = selectedQntMesas[selectedQntMesas.length - 1];
        } else {
            primeiraMesa = '';
            ultimaMesa = '';
        }
    }, [selectedQntMesas]);

    const handleSelectQntMesas = (item) => {
        const key = item.key;
        let updatedSelectedQntMesas = [...selectedQntMesas];

        if (updatedSelectedQntMesas.includes(key)) {
            updatedSelectedQntMesas = updatedSelectedQntMesas.filter(btnKey => btnKey !== key);
        } else {
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

    const getSelectedPeopleValue = () => {
        const selectedPerson = qntPessoas.find(item => item.key === selectedPeople);
        if (selectedPerson) {
            if (selectedPerson.value === 'custom') {
                return customNumberOfPeople || 0;
            }
            return selectedPerson.value;
        }
        return 0;
    };

    const getSelectedMesaValue = () => {
        switch (selectedMesa) {
            case 'a':
                return 'externa';
            case 'b':
                return 'interna';
            default:
                return '';
        }
    };

    const criarMesas = async () => {
        try {
            const response = await fetch(`http://${IP}:3000/restaurante/667b89c538e14d718f66dc25/mesas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzcyZGY3MzNkMjgzNWZiNWFkZmZjZiIsImlhdCI6MTcxOTQyNTAyMX0.MWQ-INLeeX0CS5PA77OYqcBNOYclK-LqiMUj7eeI6t4`
                },
                body: JSON.stringify({
                    numeroInicial: primeiraMesa,
                    quantidade: ultimaMesa,
                    nmrLugares: pessoas,
                    tipo: mesa
                })
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.msg || 'Erro ao criar mesas');
            }

            const data = await response.json();
            console.log('Mesas criadas com sucesso:', data.mesas);
        } catch (error) {
            console.error('Erro ao criar mesas:', error.message);
        }
    };

    useImperativeHandle(ref, () => ({
        criarMesas
    }));

    return (
        <View style={{ flex: 1 }}>
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
                                    style={[styles.dias, { backgroundColor: '#fe0000' }]}
                                    onPress={() => setInputVisible(true)}
                                >
                                    <Text style={[styles.buttonText, { fontSize: 25 }]}>+</Text>
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
});

export default CadMesas;
