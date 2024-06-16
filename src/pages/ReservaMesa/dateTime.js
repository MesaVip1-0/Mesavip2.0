import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import styles from "./styles";

const DateTime = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedPeople, setSelectedPeople] = useState(null);
    const [selectedMesa, setSelectedMesa] = useState(null);
    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const [customNumberOfPeople, setCustomNumberOfPeople] = useState('');
    const [qntPessoas, setQntPessoas] = useState([
        { key: 'a', image: require('./uma-pessoa1.png') },
        { key: 'b', image: require('./duas-pessoas1.png') },
        { key: 'c', image: require('./tres-pessoas1.png') },
        { key: 'd', image: require('./quatro-pessoas1.png'), customImage: require('./mais-quatro.png') } // Inicialmente sem imagem personalizada
    ]);

    const handleSelectDay = (item) => {
        setSelectedDay(item === selectedDay ? null : item);
    };

    const handleSelectTime = (horario) => {
        setSelectedTime(horario === selectedTime ? null : horario);
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

    const getNext7Days = () => {
        const days = [];
        const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
        const today = new Date();
        for (let i = 0; i < 7; i++) {
            const nextDay = new Date(today);
            nextDay.setDate(today.getDate() + i);
            days.push({
                day: daysOfWeek[nextDay.getDay()],
                date: nextDay.getDate()
            });
        }
        return days;
    };

    useEffect(() => {
        setDaysOfWeek(getNext7Days());
    }, []);

    const handleCustomNumberChange = (text) => {
        // Valida se o texto contém apenas números antes de atualizar o estado
        if (/^\d+$/.test(text) || text === '') {
            setCustomNumberOfPeople(text);
            setSelectedPeople('d'); // Define "d" como selecionado quando o usuário digitar um número customizado
        }
    };

    return (
        <>
            <FlatList
                data={daysOfWeek}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingLeft: 20,
                    paddingRight: 20
                }}
                keyExtractor={(item) => item.day + item.date}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.dias,
                            { backgroundColor: item === selectedDay ? '#fe0000' : undefined }
                        ]}
                        onPress={() => handleSelectDay(item)}
                    >
                        <Text style={{ color: item === selectedDay ? '#fff' : '#dfdddd' }}>{item.date}</Text>
                        <Text style={{ color: item === selectedDay ? '#fff' : '#dfdddd' }}>{item.day}</Text>
                    </TouchableOpacity>
                )}
            />

            <Text style={styles.escolhaHorario}>
                Escolha o Horário:
            </Text>

            <FlatList
                data={[
                    ['14:30', '15:00'],
                    ['15:30', '16:00'],
                    ['16:30', '17:00'],
                    ['17:30', '18:00'],
                ]}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingLeft: 20,
                    paddingRight: 20
                }}
                renderItem={({ item }) => (
                    <View>
                        {item.map(horario => (
                            <TouchableOpacity
                                key={horario}
                                style={[
                                    styles.horarios,
                                    { backgroundColor: horario === selectedTime ? '#fe0000' : '#d9d9d9' }
                                ]}
                                onPress={() => handleSelectTime(horario)}
                            >
                                <Text style={{ color: horario === selectedTime ? '#fff' : '#000' }}>{horario}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            />

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
