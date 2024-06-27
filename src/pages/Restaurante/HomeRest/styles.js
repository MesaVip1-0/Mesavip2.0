import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#000',
    },
    containerLogo: {
        flex: 0.4,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#141414',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderTopWidth: 1.5,
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        borderColor: '#fff',
        paddingEnd: '5%',
        paddingBottom: '5%',
        overflow: 'hidden', // Evita que a borda cubra outros componentes
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
        color: '#fff',
        fontSize: 16.5,
        fontWeight: 'bold',
        marginTop: 15,
        paddingStart: '5%',
    },
    text: {
        color: '#fff',
        paddingStart: '5%',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    subTitleIcon: {
        color: 'grey',
        fontSize: 16.5,
        fontWeight: 'bold',
        marginTop: 15,
        paddingStart: '5%',
    },
    titleIconSelected: {
        color: 'white',
        fontSize: 16.5,
        fontWeight: 'bold',
        marginTop: 15,
        paddingStart: '5%',
    },
    iconsContainerList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: '5%',
        paddingEnd: '5%',
        flexWrap: 'wrap',
        marginTop: '5%',
    },
    iconsStyle: {
        fontSize: 38,
        color: 'grey',
    },
    iconsContainer: {
        alignItems: 'center',
        width: '45%',
        marginBottom: '5%',
    },
    horarioContainer: {

    },
    horarioTextContainer: {
        width: '55%',
        alignItems: 'flex-start',
    },
    horario: {
        width: '30%',
        height: 35,
        borderRadius: 10,
        borderWidth: 2.5,
        borderColor: '#fff',
        backgroundColor: '#423B3B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    horarioStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    horarioText: {
        color: '#fff',
        fontSize: 16.5,
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
    Button: {
        backgroundColor: '#423B3B',
        width: '80%',
        height: 50,
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        marginBottom: 50
    },
    buttonText: {
        color: '#fff',
        fontSize: 21,
        fontWeight: 'bold'
    },
    buttonReserv: {
        backgroundColor: '#FE0000',
        width: '80%',
        height: 50,
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: 20,
        marginBottom: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FE0000'
    },
    titleReserv: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        flexDirection: 'row',
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderColor: '#fff'
    },
    return: {
        position: 'absolute',
        top: 5,
        left: 5,
        fontSize: 34,
        color: '#fff',
        zIndex: 1,
    },
    selectedIcon: {
        color: 'white',
        fontSize: 38
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
        fontSize: 18,
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
    },
    selectedOption: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    modalTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        paddingStart: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    uploadMessage: {
        color: 'green',
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'center',
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    selectedImage: {
        width: 100,
        height: 100,
        margin: 5,
    },
    horarioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: '5%',
        paddingEnd: '5%',
        marginTop: 10,
        alignItems: "flex-start",
    },
    horario: {
        width: '30%',
        height: 35,
        borderRadius: 10,
        borderWidth: 2.5,
        borderColor: '#fff',
        backgroundColor: '#423B3B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    horarioText: {
        color: '#fff',
        fontSize: 16.5,
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
    horarioButtonText: {
        color: '#fff',
        fontSize: 16.5,
        fontWeight: 'bold',
    },
    horarioInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
        fontSize: 18,
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
    },
    selectedOption: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    deleteIcon: {
        fontSize: 30,
        color: '#fe0000',
        paddingLeft: '2%'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
    },
    modalButton: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        height: 45,
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        flexDirection: 'row',
    },
});


export default styles;