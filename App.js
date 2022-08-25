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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import components
import SignInPage from './pages/SignInPage/signInPage';
import HomePage from './pages/HomePage/homePage';
import SignUpPage from './pages/SignUpPage/signUpPage';
import WelcomePage from './pages/WelcomePage/welcomePage';

//variable for navigation
const Stack = createNativeStackNavigator()

export default function App() {

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomePage" component={WelcomePage}></Stack.Screen>
        <Stack.Screen name="SignInPage" component={SignInPage}></Stack.Screen>
        <Stack.Screen name="HomePage" component={HomePage}></Stack.Screen>
        <Stack.Screen name="SignUpPage" component={SignUpPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
