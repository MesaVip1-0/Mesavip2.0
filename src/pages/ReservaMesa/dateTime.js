import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

const DateTime = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedPeople, setSelectedPeople] = useState(null);
    const [selectedMesa, setSelectedMesa] = useState(null);
    const [daysOfWeek, setDaysOfWeek] = useState([]);

    const peopleData = [
        { key: 'a', image: require('./uma-pessoa1.png') },
        { key: 'b', image: require('./duas-pessoas1.png') },
        { key: 'c', image: require('./tres-pessoas1.png') },
        { key: 'd', image: require('./quatro-pessoas1.png') }
    ];

    const handleSelectDay = (item) => {
        setSelectedDay(item === selectedDay ? null : item);
    };

    const handleSelectTime = (horario) => {
        setSelectedTime(horario === selectedTime ? null : horario);
    };

    const handleSelectPeople = (key) => {
        setSelectedPeople(key === selectedPeople ? null : key);
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
                    ['17:30'],
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
                data={peopleData}
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
                        <Image source={item.image} style={{ width: 50, height: 50 }} />
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

const styles = StyleSheet.create({
    dias: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        margin: 5,
    },
    horarios: {
        width: 100,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 5
    },
    escolhaHorario: {
        color: '#fff',
        fontSize: 20,
        paddingLeft: 25,
        paddingTop: 20,
        paddingBottom: 10
    },
    qtdPessoas: {
        width: 75,
        height: 75,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#a99c9c'
    },
    mesa: {
        width: 150,
        height: 40,
        backgroundColor: '#5F5959',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 40
    },
    indisponivel: {
        fontSize: 15,
        color: '#fff',
        paddingLeft: 55
    },
    imgMesas: {
        flexDirection: 'row',
    },
    imgEx: {
        width: 200
    },
    imgIn: {
        width: 90,
        marginTop: 10,
        marginLeft: 40
    }
});
