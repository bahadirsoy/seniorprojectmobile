import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './welcomePage.styles.js'

const WelcomePage = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Welcome</Text>
            </View>

            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    CheckRoommate is social media like program that helps you to find roommate. 
                    You must sign in to continue. You can create new account if you don't have one yet.
                </Text>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.logInButton} onPress={() => {props.navigation.navigate("SignInPage")}} >
                    <Text style={styles.logInButtonText}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signUpButton} onPress={() => {props.navigation.navigate("SignUpPage")}} >
                    <Text style={styles.signUpButtonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomePage