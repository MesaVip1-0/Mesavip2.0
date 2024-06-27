import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

export default function TermosUso() {
    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#141414' }}>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerTermos}>
                <ScrollView>
                    <View>
                        <Text style={styles.titleTerm}>
                            Termos de Uso
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.txtBody}>
                            Bem-vindo ao aplicativo Mesavip. Ao utilizar nossos serviços, você concorda com os seguintes
                            Termos de Uso. Leia atentamente para garantir que você compreenda e aceite todas as condições
                            estabelecidas.
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>1. Aceitação dos Termos</Text>
                        <Text style={styles.txtBody}>Ao criar uma conta ou utilizar nosso aplicativo, você concorda com
                            os presentes Termos de Uso. Se você não concordar com qualquer parte desses termos, não deverá
                            utilizar nosso serviço.</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>2. Serviços Oferecidos</Text>
                        <Text style={styles.txtBody}>Nosso aplicativo permite que os usuários façam reservas de mesas em
                            restaurantes parceiros. Oferecemos informações sobre disponibilidade, horários e outras
                            diversas funcionalidades.</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>3. Cadastro e Conta de Usuário</Text>
                        <Text style={styles.txtBody}>Para utilizar nossos serviços, você deve criar uma conta fornecendo
                            informações verdadeiras, completas e atualizadas. Você é responsável por manter a confidencialidade
                            de sua senha e pela atividade que ocorre em sua conta.</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>4. Política de Privacidade</Text>
                        <Text style={styles.txtBody}>Nos comprometemos a proteger sua privacidade.
                            As informações coletadas serão utilizadas apenas para a melhoria de nossos serviços e não
                            serão compartilhadas com terceiros, exceto conforme necessário para a execução do serviço
                            (por exemplo, com os restaurantes parceiros).</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>5. Reservas e Cancelamentos</Text>
                        <Text style={styles.txtBody}>Você pode fazer reservas por meio do nosso aplicativo. Em caso de
                            necessidade de cancelamento ou alteração da reserva, pedimos que o faça com antecedência
                            mínima de 24 horas. Cancelamentos em prazo inferior poderão resultar em penalidades conforme
                            a política do restaurante parceiro.</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>5. Reservas e Cancelamentos</Text>
                        <Text style={styles.txtBody}>Você pode fazer reservas por meio do nosso aplicativo. Em caso de
                            necessidade de cancelamento ou alteração da reserva, pedimos que o faça com antecedência
                            mínima de 24 horas. Cancelamentos em prazo inferior poderão resultar em penalidades conforme
                            a política do restaurante parceiro.</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>6. Alteração nos Termos</Text>
                        <Text style={styles.txtBody}>Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
                            momento. Qualquer alteração será comunicada por meio do aplicativo ou por e-mail. O uso
                            continuado do serviço após a comunicação das alterações constitui sua aceitação dos novos
                            termos.</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>7. Contato</Text>
                        <Text style={styles.txtBody}>Se você tiver qualquer dúvida ou sugestão sobre nossos Termos de Uso,
                            entre em contato conosco através do e-mail mesavip@gmail.com ou pelo telefone 1197286-3389.</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>8. Legislação Aplicável</Text>
                        <Text style={styles.txtBody}>Estes Termos de Uso são regidos pelas leis do Brasil. Qualquer
                            disputa será resolvida nos tribunais competentes de Barueri, São Paulo. Agradecemos por
                            escolher nosso aplicativo e esperamos proporcionar a você uma experiência excelente ao
                            reservar suas mesas em nossos restaurantes parceiros.</Text>
                    </View>
                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}

