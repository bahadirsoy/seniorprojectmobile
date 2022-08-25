import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './profilePage.styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {

    //userId
    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        AsyncStorage.getItem("userId").then(userId => {
            axios.get("https://bezkoder-server.herokuapp.com/api/getUserInformationsWithUserId", {
                params: {
                    userId: userId
                }
            })
            .then(response => {
                setUserInfo(response.data[0])
            })
        })
    }, [])

    return(
        <View>
            <Text>brom</Text>
        </View>
    )
}

export default ProfilePage