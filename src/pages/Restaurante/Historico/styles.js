import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems:'center'
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
    subTitle: {
        borderBottomWidth: 2,
        borderColor: '#a2a2a2',
        width: '65%',
        alignSelf: 'flex-start',
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
    txtSubtitle: {
        color: '#fff',
        fontSize: 22,
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
        width: '50%',
        alignSelf: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    txtBtnCli: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        width: '50%',
        alignSelf: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    excluir: {
        width: 50,
        alignItems: 'center',
        marginLeft: -50,
        paddingTop: 8,
        marginTop: 15
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
    },
    text: {
        width: 300,
        opacity:1,
        flexDirection:'column'
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


    modalTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectedOption: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fffd',

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalOverlay: {
        flex: 1,
        width: '100%',
        backgroundColor: 'transparent',
    },
    modalView: {
        margin: 80,
        backgroundColor: '#000',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#fe0000',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    optionButton: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    optionText: {
        fontSize: 20,
        color: '#fff'
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fe0000',
        borderRadius: 10,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:16
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
        fontSize: 13,
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
    monthSelection: {
        marginTop: 10,
        marginBottom: 10,
    },
    monthButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
    },
    monthButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default styles;