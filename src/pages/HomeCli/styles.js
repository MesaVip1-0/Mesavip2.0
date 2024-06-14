import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141414',
        height: 100,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {
            width: 1,
            height: 10,

        },
    },
    container1: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        width: 340,
        margin: 20,
        borderBottomWidth: 0.5,
        paddingBottom: 20,
        borderColor: '#a2a2a2',
        borderRadius: 10,
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 16,
        paddingTop: 10
    },

    searchBtn: {
        backgroundColor: '#D7D7D7',
        flexDirection: 'row',
        gap: 10,
        padding: 14,
        alignItems: 'center',
        width: 280,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#d5d5d5',
        borderRadius: 30,
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    filterBtn: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 24,
    },
    text: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    subText: {
        color: 'grey',
        fontSize: 15,
        fontWeight: 'bold'
    },
    image: {
        width: '100%',
        height: 250, // ajuste conforme necessário
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 2.5,
        borderColor: '#FE0000'
    },

    description: {
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'center',
        color: '#fff'
    },
});


export default styles;