import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    infoContainer: {
        flex:1,
        justifyContent: "center",
    },
    infoText:{
        fontSize: 18,
        marginVertical: 5,
        marginHorizontal: 20
    },
    updateContainer: {
        flex: 1,
    },
    updateInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5
    },
    updateInput: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: "50%",
        marginLeft: 15,
        borderRadius: 5
    },
    updateButton: {
        paddingVertical: 12,
        backgroundColor: "lightblue",
        width: "37%",
        marginLeft: 20,
        borderRadius: 100,
        alignItems: "center"
    },
    updateButtonText: {
        color: "white",
        fontSize: 15
    }
})

export default styles