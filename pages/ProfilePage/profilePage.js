import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './profilePage.styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';
import BottomSheet from 'react-native-easy-bottomsheet';
import { Button } from '@react-native-material/core';

const ProfilePage = () => {

    //visibility of bottom sheets
    const [isVisibleName, setIsVisibleName] = useState(false)
    const [isVisibleSurname, setIsVisibleSurname] = useState(false)
    const [isVisibleEmail, setIsVisibleEmail] = useState(false)
    const [isVisiblePhone, setIsVisiblePhone] = useState(false)

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

        setIsVisibleName(false)
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

        setIsVisibleSurname(false)
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

        setIsVisibleEmail(false)
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

        setIsVisiblePhone(false)
    }

    //update input variables
    const [newName, setNewName] = useState('')
    const [newSurname, setNewSurname] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPhone, setNewPhone] = useState('')

    return(
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}> Username: {userInfo ? userInfo.username : <ActivityIndicator size="small" color="error" />}</Text>
                <Text style={styles.infoText}> Name: {userInfo ? userInfo.name : <ActivityIndicator size="small" color="error" />}</Text>
                <Text style={styles.infoText}> Surname: {userInfo ? userInfo.surname : <ActivityIndicator size="small" color="error" />}</Text>
                <Text style={styles.infoText}> E-mail: {userInfo ? userInfo.email : <ActivityIndicator size="small" color="error" />}</Text>
                <Text style={styles.infoText}> Phone: {userInfo ? userInfo.phone : <ActivityIndicator size="small" color="error" />}</Text>
            </View>

            <View style={styles.updateContainer}>
                {/*Update name*/}
                <View style={styles.updateInputContainer}>
                    <TextInput
                        style={styles.updateInput}
                        placeholder={userInfo ? userInfo.name : null}
                        onChangeText={(val) => {setNewName(val)}}
                    />
                    <TouchableOpacity style={styles.updateButton} onPress={() => setIsVisibleName(true)} >
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
                    <TouchableOpacity style={styles.updateButton} onPress={() => setIsVisibleSurname(true)} >
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
                    <TouchableOpacity style={styles.updateButton} onPress={() => setIsVisibleEmail(true)} >
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
                    <TouchableOpacity style={styles.updateButton} onPress={() => setIsVisiblePhone(true)} >
                        <Text style={styles.updateButtonText}>Update phone</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* bottom sheet name */}
            <BottomSheet
                bottomSheetTitle={"You are about to change your name"}
                bottomSheetIconColor="#0A2463"
                bottomSheetStyle={{
                    backgroundColor: "white",
                    maxHeight: "20%",
                    minHeight: "15%",
                }}
                bottomSheetTitleStyle={{color: '#0A2463'}}
                setBottomSheetVisible={setIsVisibleName}
                bottomSheetVisible={isVisibleName}
            >
                <Button title="Continue" color='green' style={{marginVertical: 5}} onPress={updateName} />
                <Button title="Cancel" color='error' onPress={() => setIsVisibleName(false)} />
            </BottomSheet>

            {/* bottom sheet name */}
            <BottomSheet
                bottomSheetTitle={"You are about to change your surname"}
                bottomSheetIconColor="#0A2463"
                bottomSheetStyle={{
                    backgroundColor: "white",
                    maxHeight: "20%",
                    minHeight: "15%",
                }}
                bottomSheetTitleStyle={{color: '#0A2463'}}
                setBottomSheetVisible={setIsVisibleSurname}
                bottomSheetVisible={isVisibleSurname}
            >
                <Button title="Continue" color='green' style={{marginVertical: 5}} onPress={updateSurname} />
                <Button title="Cancel" color='error' onPress={() => setIsVisibleSurname(false)} />
            </BottomSheet>

            {/* bottom sheet name */}
            <BottomSheet
                bottomSheetTitle={"You are about to change your email"}
                bottomSheetIconColor="#0A2463"
                bottomSheetStyle={{
                    backgroundColor: "white",
                    maxHeight: "20%",
                    minHeight: "15%",
                }}
                bottomSheetTitleStyle={{color: '#0A2463'}}
                setBottomSheetVisible={setIsVisibleEmail}
                bottomSheetVisible={isVisibleEmail}
            >
                <Button title="Continue" color='green' style={{marginVertical: 5}} onPress={updateEmail} />
                <Button title="Cancel" color='error' onPress={() => setIsVisibleEmail(false)} />
            </BottomSheet>

            {/* bottom sheet name */}
            <BottomSheet
                bottomSheetTitle={"You are about to change your phone"}
                bottomSheetIconColor="#0A2463"
                bottomSheetStyle={{
                    backgroundColor: "white",
                    maxHeight: "20%",
                    minHeight: "15%",
                }}
                bottomSheetTitleStyle={{color: '#0A2463'}}
                setBottomSheetVisible={setIsVisiblePhone}
                bottomSheetVisible={isVisiblePhone}
            >
                <Button title="Continue" color='green' style={{marginVertical: 5}} onPress={updatePhone} />
                <Button title="Cancel" color='error' onPress={() => setIsVisiblePhone(false)} />
            </BottomSheet>
        </View>
    )
}

export default ProfilePage