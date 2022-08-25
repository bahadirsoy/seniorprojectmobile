import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#bac6e3"
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-evenly"
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