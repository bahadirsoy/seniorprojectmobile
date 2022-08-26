import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './comments.styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const CommentsPage = (props) => {

    useEffect(() => {
        AsyncStorage.getItem("userId").then(userId => {

        })
    })

    return(
        <View>
            <Text>devamke</Text>
        </View>
    )
}

export default CommentsPage