import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign, FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;

export default function Perfil() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/comida.jpg')}
                    style={{ width: '100%' }}
                    resizeMode="repeat"
                />
            </View>

            <Animatable.View delay={1000} animation="fadeIn" style={styles.imageView}>
                <TouchableOpacity style={styles.image}>
                    <Image
                        source={require('../../assets/thiago.png')}
                        style={{ width: '100%' }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </Animatable.View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <ScrollView>
                    <View style={styles.container2}>
                        <View style={styles.name}>
                            <Text style={styles.text1}>Thiago Justino</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="phone" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>Telefone</Text>
                                <Text style={styles.subTitle}>+55  (11) 94035-7986</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="credit-card" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>Pagamento</Text>
                                <Text style={styles.subTitle}>Formas de Recebimento</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('NotificacoesCli')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="bell" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>Notificações</Text>
                                <Text style={styles.subTitle}>Gerencie suas notificações</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AlterDados')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="edit-3" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>Alterar Dados</Text>
                                <Text style={styles.subTitle}>Altere seu e-mail e senha</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="comment-question-outline" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>FAQ</Text>
                                <Text style={styles.subTitle}>Perguntas Frequentes</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
    },
    container2: {
        margin: 40,
        marginTop: 70,
        borderBottomWidth: 1,
        borderColor: '#a2a2a2',
        borderRadius: 10,
    },
    containerLogo: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#141414',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderWidth: 3,
        borderColor: '#fff',
        paddingEnd: '5%',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        paddingStart: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    subTitle: {
        color: '#a2a2a2',
        fontSize: 16.5,
        fontWeight: 'bold',
        marginTop: 5,
        paddingStart: '3%',
        height:21
    },
    text: {
        color: '#fff',
        paddingStart: '5%',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 15,
    },
    text1: {
        color: '#fff',
        paddingStart: '5%',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 15,
        textAlign: 'center'
    },
    iconsStyle: {
        fontSize: 40,
        color: '#fff',
        marginStart:'5%'
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    btn: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomWidth:1,
        borderColor: '#a2a2a2',
        borderRadius: 25,
    },
    image: {
        bottom: 125,
        position: "absolute",
        width: width * 0.5,
        height: width * 0.5,
        backgroundColor: "#ffffff",
        borderRadius: width * 0.5,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#fff"
    },
    imageView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        right: '50%',
        top: '50%',
        left: '50%',
        zIndex: 1
    }
})