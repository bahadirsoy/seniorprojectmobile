import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './signUpPage.styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Formik } from 'formik';
import { faUserPlus, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const SignUpPage = (props) => {

    const [hidePassword, toggleHidePassword] = useState(true)

    const signUp = (values) => {
        const {username, password, name, surname, email} = values

        const trimmedUsername = username.trim()
        const trimmedName = name.trim()
        const trimmedSurname = surname.trim()
        const trimmedEmail = email.trim()

        axios.post('https://bezkoder-server.herokuapp.com/api/insertUser', {
            username: trimmedUsername, 
            password: password,
            name: trimmedName,
            surname: trimmedSurname,
            email: trimmedEmail
        }).then(response => {
            if(response.data.error){
                if(response.data.error.errno == 1062){
                    console.log("Username taken brom")
                }
            } else{
                //get id of user
                axios.get("https://bezkoder-server.herokuapp.com/api/getId", {
                    params: {
                        username: trimmedUsername
                    }
                })
                .then((response) => {
                    //set userId cookie after signed up
                    AsyncStorage.setItem("userId", response.data[0].userId.toString())
                    props.navigation.navigate("HomePage")
                })
            }
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.signUpIcon}>
                <FontAwesomeIcon icon={ faUserPlus } size={100} />
            </View>

            <Formik
                initialValues={{
                    username: "",
                    password: "",
                    name: "",
                    surname: "",
                    email: ""
                }}
                onSubmit={(values) => {
                    signUp(values)
                }}
            >

            {({handleChange, values, handleSubmit}) => {
                const {username, password, name, surname, email} = values

                return(
                    <View style={styles.form}>
                        <View style={styles.inputItem}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Username"
                                onChangeText={handleChange("username")}
                                value={username}
                            />
                        </View>

                        <View style={styles.inputItem}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Password"
                                onChangeText={handleChange("password")}
                                value={password}
                                secureTextEntry={hidePassword}
                            />
                            <TouchableOpacity style={styles.hidePasswordIcon} onPress={() => {toggleHidePassword(!hidePassword)}} >
                                <FontAwesomeIcon icon={ faEyeSlash } size={25} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputItem}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Name"
                                onChangeText={handleChange("name")}
                                value={name}
                            />
                        </View>

                        <View style={styles.inputItem}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Surname"
                                onChangeText={handleChange("surname")}
                                value={surname}
                            />
                        </View>

                        <View style={styles.inputItem}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="E-mail"
                                onChangeText={handleChange("email")}
                                value={email}
                            />
                        </View>

                        <View style={styles.signUpButtonView}>
                            <TouchableOpacity style={styles.signUpButton} onPress={handleSubmit} >
                                <Text style={styles.signUpButtonText}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }}

            </Formik>

            <View style={styles.alert}>
                <TouchableOpacity onPress={() => {props.navigation.navigate("SignInPage")}}>
                    <Text style={styles.alertText1}>
                        Already have an account ?
                        <Text style={styles.alertText2}> Sign in</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUpPage