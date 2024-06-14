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
    txtTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
        textAlign: 'center',
    },
    btnMesa: {
        flexDirection: 'row',
        justifyContent: 'center'
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
    bah: {
        marginTop: 50,
        width: '90%',
        height: "12.9%",
        backgroundColor: '#a2a2a2',
        borderRadius: 10,
        margin: 'auto',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#fff',
        opacity: 0.8


    },
    bah1: {
        width: 300,
        opacity:1
    }
})

export default styles;