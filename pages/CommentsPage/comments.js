import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './comments.styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Comment from '../../components/Comment/comment.js';
import { TextInput, Button } from '@react-native-material/core';

const CommentsPage = (props) => {

    //userId
    const [userId, setUserId] = useState()

    //comments
    const [comments, setComments] = useState()

    //new comment
    const [newComment, setNewComment] = useState('')

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

    //add comment
    const addComment = () => {
        axios.post('https://bezkoder-server.herokuapp.com/api/insertPostComment', {
            newComment: newComment,
            postId: props.route.params.postId,
            userId: props.route.params.userId
        }).then((response) => { //feedback from api
            console.log(response.data)
        })
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={comments}
                renderItem={({item}) => 
                    <Comment
                        userId={item.userId}
                        commentContent={item.commentContent}
                    />
                }
                keyExtractor={(item) => item.postCommentId}
            />

            <View style={styles.newCommentView}>
                <TextInput variant="outlined" label="Make a comment" style={styles.newComment} onChangeText={val => setNewComment(val)} />

                <Button uppercase={false} title="Add" style={styles.makeCommentButton} onPress={() => addComment()} />
            </View>
        </View>
    )
}

export default CommentsPage