import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './signUpPage.styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Formik } from 'formik';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const SignUpPage = () => {
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
            >

            {({handleChange, values}) => {
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
                            />
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
                            <TouchableOpacity style={styles.signUpButton}>
                                <Text style={styles.signUpButtonText}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }}

            </Formik>

            <View style={styles.alert}>
                <TouchableOpacity>
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