import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'

    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        paddingStart: '5%'
    },
    text: {
        color: '#a1a1a1',
        paddingStart: '5%'
    },
    button1: {
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: 50,
        paddingVertical: 8,
        width: '40%',
        alignSelf: 'flex-start',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: '5%'
    },
    button2: {
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: 50,
        paddingVertical: 8,
        width: '40%',
        alignSelf: 'flex-end',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: '5%',
        marginStart: '5%',

    },
    buttonText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
    },
    btnFix: {
        flex: 1,
        padding: 5


    }
})

export default styles;