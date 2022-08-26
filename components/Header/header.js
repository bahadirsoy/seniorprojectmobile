import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './header.styles.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import axios from 'axios'

const Header = (props) => {

    //username
    const [username, setUsername] = useState('')

    useEffect(() => {
        AsyncStorage.getItem("userId").then(val => {
            axios.get("https://bezkoder-server.herokuapp.com/api/getUsernameFromId", {
                params: {
                    userId: val
                }
            })
            .then(response => {
                setUsername(response.data[0].username)
            })
            .catch(error => {
                console.log(error)
            })
        })
    }, [])

    //logout
    const logout = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            props.navigation.navigate("WelcomePage")
            return true;
        }
        catch(exception) {
            console.log("olmadı aga")
        }
    }

    return(
        <View style={styles.header}>
            <View style={styles.welcomeUserView}>
                <Text style={styles.welcomeUserText}>Welcome {username}</Text>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.profileButton} onPress={() => {props.navigation.navigate("ProfilePage")}} >
                    <Text style={styles.buttonText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logoutButton} onPress={() => {logout("userId")}} >
                    <Text style={styles.buttonText}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header