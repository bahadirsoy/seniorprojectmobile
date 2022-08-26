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

    //update name
    const updateName = () => {

        //trim name and check validity
        const trimmedName = newName.trim()

        if(trimmedName == "" || !trimmedName){
            console.log("name bos ustam")
            return
        }
        
        axios.put("https://bezkoder-server.herokuapp.com/api/updateName", {
            name: trimmedName,
            username: userInfo.username
        }).then((response) => {
            setUserInfo({
                ...userInfo,
                name: trimmedName
            })
        })
    }

    //update name
    const updateSurname = () => {

        //trim name and check validity
        const trimmedSurname = newSurname.trim()

        if(trimmedSurname == "" || !trimmedSurname){
            console.log("surname bos ustam")
            return
        }
        
        axios.put("https://bezkoder-server.herokuapp.com/api/updateSurname", {
            surname: trimmedSurname,
            username: userInfo.username
        }).then((response) => {
            setUserInfo({
                ...userInfo,
                surname: trimmedSurname
            })
        })
    }

    //update name
    const updateEmail = () => {

        //trim name and check validity
        const trimmedEmail = newEmail.trim()

        if(trimmedEmail == "" || !trimmedEmail){
            console.log("email bos ustam")
            return
        }
        
        axios.put("https://bezkoder-server.herokuapp.com/api/updateEmail", {
            email: trimmedEmail,
            username: userInfo.username
        }).then((response) => {
            setUserInfo({
                ...userInfo,
                email: trimmedEmail
            })
        })
    }

    //update name
    const updatePhone = () => {

        //trim name and check validity
        const trimmedPhone = newPhone.trim()

        if(trimmedPhone == "" || !trimmedPhone){
            console.log("phone bos ustam")
            return
        }
        
        axios.put("https://bezkoder-server.herokuapp.com/api/updatePhone", {
            phone: trimmedPhone,
            username: userInfo.username
        }).then((response) => {
            setUserInfo({
                ...userInfo,
                phone: trimmedPhone
            })
        })
    }

    //update input variables
    const [newName, setNewName] = useState('')
    const [newSurname, setNewSurname] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPhone, setNewPhone] = useState('')

    return(
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}> Username: {userInfo ? userInfo.username : null}</Text>
                <Text style={styles.infoText}> Name: {userInfo ? userInfo.name : null}</Text>
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
                        onChangeText={(val) => {setNewName(val)}}
                    />
                    <TouchableOpacity style={styles.updateButton} onPress={updateName} >
                        <Text style={styles.updateButtonText}>Update name</Text>
                    </TouchableOpacity>
                </View>

                {/* Update surname */}
                <View style={styles.updateInputContainer}>
                    <TextInput
                        style={styles.updateInput}
                        placeholder={userInfo ? userInfo.surname : null}
                        onChangeText={(val) => {setNewSurname(val)}}
                    />
                    <TouchableOpacity style={styles.updateButton} onPress={updateSurname} >
                        <Text style={styles.updateButtonText}>Update surname</Text>
                    </TouchableOpacity>
                </View>

                {/* Update email */}
                <View style={styles.updateInputContainer}>
                    <TextInput
                        style={styles.updateInput}
                        placeholder={userInfo ? userInfo.email : null}
                        onChangeText={(val) => {setNewEmail(val)}}
                    />
                    <TouchableOpacity style={styles.updateButton} onPress={updateEmail} >
                        <Text style={styles.updateButtonText}>Update email</Text>
                    </TouchableOpacity>
                </View>

                {/* Update phone */}
                <View style={styles.updateInputContainer}>
                    <TextInput
                        style={styles.updateInput}
                        placeholder={userInfo ? userInfo.phone : null}
                        onChangeText={(val) => {setNewPhone(val)}}
                    />
                    <TouchableOpacity style={styles.updateButton} onPress={updatePhone} >
                        <Text style={styles.updateButtonText}>Update phone</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProfilePage