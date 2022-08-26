import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './comments.styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const CommentsPage = (props) => {

    //userId
    const [userId, setUserId] = useState()

    //comments
    const [comments, setComments] = useState()

    useEffect(() => {
        //get userId
        AsyncStorage.getItem("userId").then(userId => {
            setUserId(userId)
        })

        getComments()
    }, [])

    //get comments
    const getComments = () => {
        axios.get("https://bezkoder-server.herokuapp.com/api/getPostComments", {
            params: {
                postId: props.route.params.postId
            }
        })
        .then((response) => {
            setComments(response.data)
        })
    }

    return(
        <View>
            <FlatList
                data={comments}
                renderItem={({item}) => 
                    <Text>kank</Text>
                }
                keyExtractor={(item) => item.postCommentId}
            />
        </View>
    )
}

export default CommentsPage