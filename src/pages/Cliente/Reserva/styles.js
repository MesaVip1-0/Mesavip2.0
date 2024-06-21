import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // STYLE resAgenda E anteriores
    btnLogo: {
        margin: 20,
        borderBottomWidth: 0.5,
        paddingBottom: 20,
        borderColor: '#a2a2a2',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderWidth: 2.5,
        borderColor: '#FE0000'
    },
    viewDescription: {
        flexDirection: 'column'
    },
    descriptionTxt: {
        paddingLeft: 10,
        fontSize: 18,
        lineHeight: 26,
        color: '#fff'
    },
    subDescripition: {
        fontSize: 15,
        color: '#9d9595',
        paddingLeft: 10
    },
    //FINAL STYLE

    //STYLE Reservas
    container: {
        backgroundColor: '#141414',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtFav: {
        color: '#fff',
        fontSize: 40
    },
    container1: {
        flex: 1,
        backgroundColor: '#141414'
    },
    txtAgenda: {
        color: '#fff',
        fontSize: 20,
        paddingLeft: 25
    },
});


export default styles;