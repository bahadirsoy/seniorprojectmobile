import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header: {
        backgroundColor: "#bac6e3",
        flexDirection: "row"
    },
    welcomeUserView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    welcomeUserText: {
        fontSize: 16
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        flex: 1
    },
    profileButton: {
        backgroundColor: "lightblue",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50
    },
    logoutButton: {
        backgroundColor: "yellow",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50
    }
})

export default styles