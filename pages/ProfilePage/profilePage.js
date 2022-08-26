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
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}> Username: {userInfo.username}</Text>
                <Text style={styles.infoText}> Surname: {userInfo.surname}</Text>
                <Text style={styles.infoText}> E-mail: {userInfo.email}</Text>
                <Text style={styles.infoText}> Phone: {userInfo.phone}</Text>
            </View>

            <View style={styles.updateContainer}>
                {/*Update name*/}
                <View style={styles.updateInputContainer}>
                    <TextInput
                        style={styles.updateInput}
                        placeholder={userInfo.name}
                    />
                    <TouchableOpacity style={styles.updateButton}>
                        <Text style={styles.updateButtonText}>Update name</Text>
                    </TouchableOpacity>
                </View>

                {/* Update surname */}
                <View style={styles.updateInputContainer}>
                    <TextInput
                        style={styles.updateInput}
                        placeholder={userInfo.surname}
                    />
                    <TouchableOpacity style={styles.updateButton}>
                        <Text style={styles.updateButtonText}>Update surname</Text>
                    </TouchableOpacity>
                </View>

                {/* Update email */}
                <View style={styles.updateInputContainer}>
                    <TextInput
                        style={styles.updateInput}
                        placeholder={userInfo.email}
                    />
                    <TouchableOpacity style={styles.updateButton}>
                        <Text style={styles.updateButtonText}>Update email</Text>
                    </TouchableOpacity>
                </View>

                {/* Update phone */}
                <View style={styles.updateInputContainer}>
                    <TextInput
                        style={styles.updateInput}
                        placeholder={userInfo.phone}
                    />
                    <TouchableOpacity style={styles.updateButton}>
                        <Text style={styles.updateButtonText}>Update phone</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProfilePage