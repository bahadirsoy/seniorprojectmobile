import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image,  TouchableOpacity, FlatList } from 'react-native';
import styles from './userInformations.styles.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ActivityIndicator } from '@react-native-material/core';
import Comment from '../../components/Comment/comment.js';
import {Button, TextInput} from '@react-native-material/core';
import uuid from 'react-native-uuid';


const UserInformations = (props) => {

    //user informations
    const [userInformations, setUserInformations] = useState()

    //user reviews
    const [userReviews, setUserReviews] = useState()

    //new user review
    const [newReview, setNewReview] = useState()

    useEffect(() => {
        getUserInformations()
        getUserReviews()
    }, [])

    //get all user profile informations and set state
    const getUserInformations = () => {
        axios.get("https://bezkoder-server.herokuapp.com/api/getUserInformationsWithUserId", {
            params: {
                userId: props.route.params.userId
            }
        })
        .then((response) => {
            setUserInformations({
                userId: response.data[0].userId,
                username: response.data[0].username,
                name: response.data[0].name,
                surname: response.data[0].surname,
                email: response.data[0].email,
                phone: response.data[0].phone,
            })
        })
    }

    //get all user reviews
    const getUserReviews = () => {
        axios.get("https://bezkoder-server.herokuapp.com/api/getUserReviews", {
            params: {
                reviewedId: props.route.params.userId
            }
        })
        .then((response) => {
            setUserReviews(response.data)
        })
    }

    //add new review with axios
    const addNewReview = () => {
        AsyncStorage.getItem("userId").then(userId => {
            axios.post('https://bezkoder-server.herokuapp.com/api/insertReview', {
                reviewedId: props.route.params.userId,
                reviewerId: userId,
                reviewContent: newReview
            }).then((response) => { //feedback from api
                userReviews.push({
                    userreviewId: uuid.v4(),
                    reviewerId: userId,
                    reviewContent: newReview,
                    reviewTime: "just now"
                })
                setUserReviews(userReviews)
                setNewReview("")
            })
        })
    }

    //user reviews visibility
    const [isVisible, setIsVisible] = useState(true)

    return(
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}> Username: {userInformations ? userInformations.username : <ActivityIndicator size="small" color="error" />} </Text>
                <Text style={styles.infoText}> Name: {userInformations ? userInformations.name : <ActivityIndicator size="small" color="error" />} </Text>
                <Text style={styles.infoText}> Surname: {userInformations ? userInformations.surname : <ActivityIndicator size="small" color="error" />} </Text>
                <Text style={styles.infoText}> E-mail: {userInformations ? userInformations.email : <ActivityIndicator size="small" color="error" />} </Text>
                <Text style={styles.infoText}> Phone: {userInformations ? userInformations.phone : <ActivityIndicator size="small" color="error" />} </Text>
            </View>

            <View>
                <Text style={{fontSize: 24, fontWeight: "600", alignSelf: "center", marginTop: 20}}>User Reviews</Text>
                <FlatList
                    data={userReviews}
                    renderItem={({item}) => 
                        <Comment
                            userId={item.reviewerId}
                            commentContent={item.reviewContent}
                        />
                    }
                    keyExtractor={(item) => item.userreviewId}
                    style={{height: "40%"}}
                />
            </View>

            <View style={styles.newCommentView}>
                <TextInput variant="outlined" label="Make a comment" style={styles.newComment} onChangeText={val => setNewReview(val)} value={newReview} />

                <Button uppercase={false} title="Add" style={styles.makeCommentButton} onPress={() => addNewReview()} />
            </View>
        </View>
    )
}

export default UserInformations