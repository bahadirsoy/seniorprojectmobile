import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        paddingVertical: 20,
        alignItems: "center"
    },
    welcomeText: {
        fontSize: 40,
        fontWeight: "900",
    },
    description: {
        paddingVertical: 30,
        paddingHorizontal: 25,
        alignItems: "center"
    },
    descriptionText: {
        fontSize: 18
    },
    buttons: {
        paddingVertical: 40,
        paddingHorizontal: 40
    },
    logInButton: {
        backgroundColor: "lightblue",
        paddingVertical: 30,
        alignItems: "center"
    },
    logInButtonText: {
        fontSize: 25
    },
    signUpButton: {
        backgroundColor: "orange",
        paddingVertical: 30,
        alignItems: "center",
        marginTop: 25
    },
    signUpButtonText: {
        fontSize: 25
    }
})

export default styles