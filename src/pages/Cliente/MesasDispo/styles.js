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
        marginTop: 10,
    },
    return: {
        position: 'absolute',
        top: 5,
        left: 5,
        fontSize: 33,
        color: '#fff',
    },
    txtTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
        textAlign: 'center',
    },
    btnMesa: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtBtn: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 17,
        padding: 10,
        width: '50%',
        alignSelf: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    pencil: {
        width: 50,
        alignItems: 'center',
        marginLeft: -50
    },
    img_mesa: {
        height: 50,
        width: 50,
        marginRight: -50
    },
    containerBtn: {
        marginTop: 25,
        width: 335,
        height: 105,
        backgroundColor: '#433d3d',
        borderRadius: 10,
        margin: 'auto',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        opacity: 0.8, 
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        width: 300,
        opacity:1
    },
    subDescripition: {
        fontSize: 13,
        color: '#9d9595',
        marginTop: -10
    },
    container1: {
        flex: 1,
        backgroundColor: '#141414',
        
    },
})

export default styles;