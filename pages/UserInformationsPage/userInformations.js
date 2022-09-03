import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './userInformations.styles.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ActivityIndicator } from '@react-native-material/core';
import Comment from '../../components/Comment/comment.js';


const UserInformations = (props) => {

    //user informations
    const [userInformations, setUserInformations] = useState()

    //user reviews
    const [userReviews, setUserReviews] = useState()

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

    return(
        <View style={styles.container}>
            <View style={styles.infoContainer}>{console.log(userReviews)}
                <Text style={styles.infoText}> Username: {userInformations ? userInformations.username : <ActivityIndicator size="small" color="error" />} </Text>
                <Text style={styles.infoText}> Name: {userInformations ? userInformations.name : <ActivityIndicator size="small" color="error" />} </Text>
                <Text style={styles.infoText}> Surname: {userInformations ? userInformations.surname : <ActivityIndicator size="small" color="error" />} </Text>
                <Text style={styles.infoText}> E-mail: {userInformations ? userInformations.email : <ActivityIndicator size="small" color="error" />} </Text>
                <Text style={styles.infoText}> Phone: {userInformations ? userInformations.phone : <ActivityIndicator size="small" color="error" />} </Text>
            </View>

            <Text style={{fontSize: 24, fontWeight: "600", alignSelf: "center"}}>User Reviews</Text>
            <FlatList
                data={userReviews}
                renderItem={({item}) => 
                    <Comment
                        userId={item.reviewerId}
                        commentContent={item.reviewContent}
                    />
                }
                keyExtractor={(item) => item.userreviewId}
                style={{marginBottom: 100}}
            />
        </View>
    )
}

export default UserInformations