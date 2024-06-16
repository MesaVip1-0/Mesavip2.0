import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414'
    },
    title: {
        borderWidth: 1,
        borderTopColor: '#141414',
        borderBottomColor: '#a2a2a2',
        borderRightColor: '#141414',
        borderLeftColor: '#141414',
        borderRadius: 10,
        width: '65%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    txtTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
    },
    btnCad: {
        width: '70%',
        height: '25%',
        backgroundColor: '#fe0000',
        borderRadius: 10,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtBtn: {
        color: '#fff',
        textAlign: 'center',
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold'
    },
    iconsStyle: {
        fontSize: 50,
        color: '#fff',
        marginStart:'5%',
        paddingLeft: 15,
        marginTop: 20
    },
    cardDebit: {
        color: '#fff',
        paddingStart: '5%',
        fontSize: 22,
        marginTop: 15,
    },
})

export default styles;