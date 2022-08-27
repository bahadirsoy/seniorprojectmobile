import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './comment.styles.js';
import axios from 'axios';
import { ActivityIndicator } from '@react-native-material/core';

const Comment = ({commentContent, userId}) => {

    //username
    const [username, setUsername] = useState('')

    useEffect(() => {
        getUsernameFromId()
    })

    //get getUsernameFromId
    const getUsernameFromId = (() => {
        axios.get("https://bezkoder-server.herokuapp.com/api/getUsernameFromId", {
            params: {
                userId: userId
            }
        })
        .then((response) => {
            setUsername(response.data[0].username)
        })
    })

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.username}>
                <Text style={styles.usernameText}> {username ? username : <ActivityIndicator size="small" color="error" />} </Text>
            </TouchableOpacity>

            <Text style={styles.commentText}> {commentContent ? commentContent : <ActivityIndicator size="small" color="error" />} </Text>
        </View>
    )
}

export default Comment