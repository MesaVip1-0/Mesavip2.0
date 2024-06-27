import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, SectionList, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import HistoricoCom from '../../../components/HistoricoCom';
import styles from './styles';

const InfoReserva = [
    {
        codigo_produto: 1,
        nome_cliente: 'Zeca Paugordinho',
        num_mesa: 'Mesa Interna 10',
        mes: 'Fevereiro',
        dia: 'Terça',
        dia_mes: '16',
        descricao: '16/02/23 ás 18:30',
        qnt_pessoas: '10 Pessoas',
    },
    {
        codigo_produto: 2,
        nome_cliente: 'Kaua',
        num_mesa: 'Mesa Interna 16',
        mes: 'Fevereiro',
        dia: 'Segunda',
        dia_mes: '15',
        descricao: '30/02/23 ás 18:30',
        qnt_pessoas: '1 Pessoa',
    },
    {
        codigo_produto: 3,
        nome_cliente: 'Big Balls',
        num_mesa: 'Mesa Interna 25',
        mes: 'Fevereiro',
        dia: 'Sexta',
        dia_mes: '19',
        descricao: '30/02/23 ás 18:30',
        qnt_pessoas: '3 Pessoas',
    },
    {
        codigo_produto: 4,
        nome_cliente: 'Josnei',
        num_mesa: 'Mesa Interna 3',
        mes: 'Fevereiro',
        dia: 'Terça',
        dia_mes: '16',
        descricao: '30/02/23 ás 18:30',
        qnt_pessoas: '4 Pessoas',
    },
    {
        codigo_produto: 5,
        nome_cliente: 'Robervaldo',
        num_mesa: 'Mesa Interna 1',
        mes: 'Março',
        dia: 'Segunda',
        dia_mes: '30',
        descricao: '30/03/23 ás 18:30',
        qnt_pessoas: '2 Pessoas',
    }
];

const groupByDay = (data) => {
    return data.reduce((acc, item) => {
        const day = `${item.dia} - ${item.dia_mes}`;
        if (!acc[day]) {
            acc[day] = [];
        }
        acc[day].push(item);
        return acc;
    }, {});
};

const Historico = () => {
    const [list, setList] = useState(groupByDay(InfoReserva));
    const [sortedMonths, setSortedMonths] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const months = InfoReserva.map(item => item.mes);
        const uniqueSortedMonths = [...new Set(months)].sort((a, b) => a.localeCompare(b));
        setSortedMonths(uniqueSortedMonths);
    }, []);

    const handleMonthSelect = (month) => {
        setSelectedMonth(month);
        setModalVisible(false);
    };

    const filteredList = selectedMonth 
        ? Object.keys(list).filter(day => list[day][0].mes === selectedMonth).map(day => ({ title: day, data: list[day] }))
        : [];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.txtTitle}>Histórico</Text>
            </View>

            <TouchableOpacity
                style={styles.modalTitle}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.selectedOption}>{selectedMonth || 'Selecione um mês'}</Text>
            </TouchableOpacity>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <View style={styles.modalOverlay} />
                    </TouchableWithoutFeedback>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Selecione um mês</Text>
                        <SectionList
                            sections={[{ data: sortedMonths }]}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.optionButton}
                                    onPress={() => handleMonthSelect(item)}
                                >
                                    <Text style={styles.optionText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item}
                        />
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {selectedMonth ? (
                <SectionList
                    sections={filteredList}
                    keyExtractor={(item) => item.codigo_produto.toString()}
                    renderItem={({ item }) => <HistoricoCom item={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.txtSubtitle}>{title}</Text>
                    )}
                    ListEmptyComponent={<Text style={{ color: '#fff', textAlign: 'center', marginTop: 20 }}>Nenhuma reserva encontrada para o mês selecionado.</Text>}
                />
            ) : (
                <Text style={{ color: '#fff', textAlign: 'center', marginTop: 20 }}>Por favor, selecione um mês para ver as reservas.</Text>
            )}
        </SafeAreaView>
    );
};

export default Historico;
