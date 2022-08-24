import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './signInPage.styles.js'

const SignInPage = (props) => {

  const [hidePassword, triggerHidePassword] = useState(true)

  const login = (values) => {
    const {username, password} = values

    axios.post("https://bezkoder-server.herokuapp.com/api/login",{
      username: username, 
      password: password
    })
    .then(response => {
      if(response.data.isLoginSuccessful){
        props.navigation.navigate("HomePage")
      } else {
        console.log("hatalı şifre ustam şifa mı bu yoksa")
      }
    })
    .catch(error => {
      console.log(error)
    })
    
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.topTitle}>
        <Text style={styles.topTitleText}> Sign In </Text>
      </View> */}

      <View style={styles.topImageView}>
        <Image
          style={styles.image}
          source={require("../../assets/images/home.png")}
        />
      </View>

      <Formik
        initialValues={{
          username: "soyisi1",
          password: "123"
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required()
        })}
        onSubmit={(values) => {
          login(values)
        }}
      >
        {({values, handleChange, handleSubmit, errors}) => {
          const {username, password} = values

          return (
            <View style={styles.form}>
              <View style={styles.inputItem}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Username"
                  onChangeText={handleChange("username")}
                  value={username}
                />
                <Text>{errors.username}</Text>
              </View>

              <View style={styles.inputItem}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  value={password}
                  secureTextEntry={hidePassword}
                />
                <TouchableOpacity style={styles.passwordIcon} onPress={() => {triggerHidePassword(!hidePassword)}}>
                  <FontAwesomeIcon icon={ faEyeSlash } size={25} />
                </TouchableOpacity>
              </View>

              <View style={styles.formAlert1}>
                <Text style={styles.formAlert1Text}>Forgot your password ?</Text>
              </View>

              <View style={styles.loginButtonView}>
                <TouchableOpacity style={styles.loginButton} onPress={handleSubmit} >
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }}
      </Formik>
      

      

      <View style={styles.or}>
        <Text style={styles.orText}>Or</Text>
      </View>

      <View style={styles.social}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesomeIcon icon={ faFacebookF } color="blue" size={25} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.icon}>
          <FontAwesomeIcon icon={ faTwitter } color="blue" size={25} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.icon}>
          <FontAwesomeIcon icon={ faLinkedin } color="blue" size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomAlert}>
        <TouchableOpacity>
          <Text style={{fontSize: 18}}>
            Dont't have an account ?

            <Text style={{color: "orange"}}> Sign in here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignInPage