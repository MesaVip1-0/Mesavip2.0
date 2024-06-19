import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    //Área da imagem e das informações do restaurante
    containerRest: {
        width: 340,
        margin: 20,
        borderBottomWidth: 0.5,
        paddingBottom: 20,
        borderColor: '#a2a2a2',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: 250, // ajuste conforme necessário
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 2.5,
        borderColor: '#FE0000'
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'center',
        color: '#fff'
    },
    //
    
    container: {
        backgroundColor: '#141414',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 16,
        paddingTop: 10      
    },
    searchBtn: {
        backgroundColor: '#D7D7D7',
        flexDirection: 'row',
        gap: 7,
        padding: 14,
        alignItems: 'center',
        width: 280,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#d5d5d5',
        borderRadius: 30,
    },
    filterBtn: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 24,
    },
    container1: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerFilter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: '#141414',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fe0000'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    categoryBtn: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#fe0000',
        borderRadius: 20,
        backgroundColor: '#D7D7D7',
        marginVertical: 5,
    },
    categoryText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonClose: {
        backgroundColor: '#2196F3',
        marginTop: 10,
        borderRadius: 15,
        padding: 10,
    },
    textStyle: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
});

export default styles;
