import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    newCommentView: {
        position: "absolute",
        bottom: 10,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10
    },
    newComment: {
        width: "80%",
        paddingHorizontal: 15
    },
    makeCommentButton: {
        width: "20%",
    }
})

export default styles