import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    horarioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: '5%',
        paddingEnd: '5%',
        marginTop: 10,
        alignItems:"flex-start",
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
    deleteIcon:{
        fontSize:30,
        color:'#fe0000',
        paddingLeft:'2%'
    }
});

export default styles;
