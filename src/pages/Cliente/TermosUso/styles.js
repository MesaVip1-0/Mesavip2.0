import { AirbnbRatingDefault } from "@rneui/themed/dist/AirbnbRating";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141414',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTermos: {
        flex: 1,
        backgroundColor: '#141414',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderColor: '#fff',
        paddingEnd: '5%',
    },
    titleTerm: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        paddingLeft: '5%',
        textAlign: 'center',
    },
    subTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
        paddingLeft: '5%',
        textAlign: 'Left'
    },
    txtBody: {
        fontSize: 18,
        color: '#fff',
        padding: '5%',
        textAlign: 'Left',
    },
});

export default styles;