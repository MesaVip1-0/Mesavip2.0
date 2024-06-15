import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    btnLogo: {
        margin: 20,
        width: '90%',
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
        borderColor: '#FE0000',
    },
    viewDescription: {
        alignItems: 'flex-start',
        width: '75%'
    },
    descriptionTxt: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 18,
        lineHeight: 26,
        alignItems: 'flex-start',
        color: '#fff'
    },
    //FINAL STYLE

    //STYLE Favoritos
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
});


export default styles;