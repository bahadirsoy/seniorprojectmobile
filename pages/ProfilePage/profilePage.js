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

    //update input variables
    const [newName, setNewName] = useState('')
    const [newSurname, setNewSurname] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPhone, setNewPhone] = useState('')

    return(
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}> Username: {userInfo ? userInfo.username : null}</Text>
                <Text style={styles.infoText}> Surname: {userInfo ? userInfo.surname : null}</Text>
                <Text style={styles.infoText}> E-mail: {userInfo ? userInfo.email : null}</Text>
                <Text style={styles.infoText}> Phone: {userInfo ? userInfo.phone : null}</Text>
            </View>

            <View style={styles.updateContainer}>
                {/*Update name*/}
                <View style={styles.updateInputContainer}>
                    <TextInput
                        style={styles.updateInput}
                        placeholder={userInfo ? userInfo.name : null}
                    />
                    <TouchableOpacity style={styles.updateButton}>
                        <Text style={styles.updateButtonText}>Update name</Text>
                    </TouchableOpacity>
                </View>

                {/* Update surname */}
                <View style={styles.updateInputContainer}>
                    <TextInput
                        style={styles.updateInput}
                        placeholder={userInfo ? userInfo.surname : null}
                    />
                    <TouchableOpacity style={styles.updateButton}>
                        <Text style={styles.updateButtonText}>Update surname</Text>
                    </TouchableOpacity>
                </View>

                {/* Update email */}
                <View style={styles.updateInputContainer}>
                    <TextInput
                        style={styles.updateInput}
                        placeholder={userInfo ? userInfo.email : null}
                    />
                    <TouchableOpacity style={styles.updateButton}>
                        <Text style={styles.updateButtonText}>Update email</Text>
                    </TouchableOpacity>
                </View>

                {/* Update phone */}
                <View style={styles.updateInputContainer}>
                    <TextInput
                        style={styles.updateInput}
                        placeholder={userInfo ? userInfo.phone : null}
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