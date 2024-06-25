import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#141414'
    },
    containerLogo: {
        width:'100%',
        justifyContent: 'center',
        paddingBottom: 0,
        height: '12%',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: '#616161'
    },
    titulo: {
        color: '#fff',
        fontSize: 30,
        paddingLeft: 25,
        paddingTop: 20,
        paddingBottom: 10
    },
    return: {
        position: 'absolute',
        top: 5,
        left: 5,
        fontSize: 34,
        color: '#fff',
        zIndex: 1,
    },
    escolhaDia:{
        color: '#fff',
        fontSize: 20,
        paddingLeft: 25,
        paddingTop: 20,
        paddingBottom: 10,
    },
    btnConfirma:{
        width: 230,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#04b600',
        margin: 30,
        borderRadius: 10
    },
    viewBtnConfirma:{
        justifyContent: 'center',
        alignItems:'center',
    },
    dias: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        margin: 5
    },
    horarios: {
        width: 100,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 5
    },
    escolhaHorario: {
        color: '#fff',
        fontSize: 20,
        paddingLeft: 25,
        paddingTop: 30,
        paddingBottom: 10
    },
    qtdPessoas: {
        width: 75,
        height: 75,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#a99c9c'
    },
    customInput:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 12,
        marginTop: -10
    },
    mesa: {
        width: 150,
        height: 143,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginRight: 40,
        marginBottom: 10
    },
    disponibilidade: {
        width: 150,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
        borderRadius: 10
    },
    indisponivel: {
        fontSize: 15,
        color: '#fff',
        paddingLeft: 55
    },
    imgMesas: {
        flexDirection: 'row',
    },
    imgEx: {
        width: 200
    },
    imgIn: {
        width: 90,
        marginTop: 10,
        marginLeft: 40
    },
   // ...existingStyles,
    initialButton: {
        padding: 20,
        backgroundColor: '#fe0000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20
        
    },
    input: {
        borderWidth: 1,
        borderColor: '#888',
        padding: 10,
        width: 150,
        marginRight: 10,
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    confirmButton: {
        padding: 10,
        backgroundColor: '#04b600',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dynamicButton: {
        padding: 20,
        backgroundColor: '#373539',
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
    }

})

export default styles;