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
        justifyContent: 'center',
        marginTop: 15
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
    editar: {
        width: 50,
        alignItems: 'center',
        marginLeft: -50,
        paddingTop: 8,
        marginTop: 23
    },
    img_mesa: {
        height: 50,
        width: 50,
        marginRight: -50,
        marginTop: 10
    },
    containerBtn: {
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
        flexDirection: 'column',
    },
    containerInfo: {
        width: 335,
        height: 105,
        borderRadius: 10,
        margin: 'auto',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: '#fff',
        opacity: 0.8, 
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    text: {
        width: 300,
        opacity:1,
        marginTop: 12
    },
    subDescripition: {
        fontSize: 13,
        color: '#9d9595',
        marginTop: -15,
    },
    container1: {
        flex: 1,
        backgroundColor: '#141414',
        
    },
    itemContainer: {
        marginTop: 35, // Espaçamento entre os itens
    },


    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        flex: 1,
        padding: 10,
        marginHorizontal: 5,
        alignItems: 'center',
        backgroundColor: '#fe0000',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    outlinedText: {
        color: '#000',
        fontSize: 17,
        marginLeft: 10,
        textShadowColor: '#fe0000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 2,
    },
    cameraOverlay: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    closeButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    qrModalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    qrModalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fe0000',
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    qrCode:{
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '50%', 
        width: '100%', 
        marginTop: 10
    },
    infoReserva:{
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row', 
        height: '50%', 
        width: '100%', 
        paddingBottom: 30
    }
})

export default styles;