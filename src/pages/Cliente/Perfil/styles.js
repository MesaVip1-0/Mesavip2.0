import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 2,
    },
    container2: {
        margin: 40,
        marginTop: 70,
        borderBottomWidth: 1,
        borderColor: '#a2a2a2',
        borderRadius: 10,
    },
    containerLogo: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
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
        color: '#a2a2a2',
        fontSize: 16.5,
        fontWeight: 'bold',
        marginTop: 5,
        paddingStart: '3%',
        height:21
    },
    text: {
        color: '#fff',
        paddingStart: '5%',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 15,
    },
    text1: {
        color: '#fff',
        paddingStart: '5%',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 15,
        textAlign: 'center'
    },
    iconsStyle: {
        fontSize: 40,
        color: '#fff',
        marginStart:'5%'
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    btn: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomWidth:1,
        borderColor: '#a2a2a2',
        borderRadius: 25,
    },
    image: {
        bottom: 125,
        position: "absolute",
        width: width * 0.5,
        height: width * 0.5,
        backgroundColor: "#ffffff",
        borderRadius: width * 0.5,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#fff"
    },
    imageView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        right: '50%',
        top: '50%',
        left: '50%',
        zIndex: 1
    }
})

export default styles;