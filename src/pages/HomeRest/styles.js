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
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: '5%',
        paddingEnd: '5%',
        marginTop: 15,
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
        borderColor: '#fff'
    },
    buttonText: {
        color: '#fff',
        fontSize: 21,
        fontWeight: 'bold'
    },
    buttonReserv: {
        backgroundColor: '#8E1515',
        width: '80%',
        height: 50,
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#8E1515'
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
});


export default styles;