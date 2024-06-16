import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        margin: 40,
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: '#a2a2a2',
        borderRadius: 1,
    },
    containerLogo: {
        flex: 0.1,
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#141414',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderWidth: 3,
        borderBottomColor: '#141414',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderTopColor: '#fff',
        paddingEnd: '5%',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
        paddingStart: '5%',
        textAlign: 'center',
    },
    text1: {
        color: '#fff',
        fontSize: 17,
        padding: 9,
    },
    btnStyle: {
        backgroundColor: '#FE0000',
        borderRadius: 10,
        padding: 10,
        width: '70%',
        justifyContent: 'flex-end'
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    inputText: {
        fontSize: 16,
        color: '#fff',
        height: 36,
        paddingLeft: 10,
    },
    inputBtn: {
        backgroundColor: '#a2a2a2',
        borderRadius: 12,
        width: '97%',
        height: 40,
        opacity: 0.3,
        marginLeft: 10
    },
})

export default styles;