import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './homePage.styles.js';
import { ActivityIndicator, Button } from '@react-native-material/core';
import * as ImagePicker from 'expo-image-picker'

//import components
import Post from '../../components/Post/post';
import Header from '../../components/Header/header.js';

const HomePage = (props) => {

    /*const [hasGalleryPermission, setHasGalleyPermission] = useState(null)
    const [image, setImage] = useState(null)*/
    
    //all posts informations
    const [posts, setPosts] = useState([])

    useEffect(() => {
        /*(async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
            setHasGalleyPermission(galleryStatus.status == "granted")
        })()*/
        //AsyncStorage.getItem("userId").then(val => console.log(val)) //print current users id

        //fetch all posts
        axios.get("https://bezkoder-server.herokuapp.com/api/getPosts", {

        })
        .then(response => {
            //store posts in state
            setPosts(response.data)
        })
    }, [])

    /*const sendPost = () => {
        const formData = new FormData();
        formData.append('userId', 41)
        formData.append('postContent', "postContent123")
        formData.append("images", image);
        //console.log(formData)
        axios.post('https://bezkoder-server.herokuapp.com/api/insertPost', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => { //feedback from api
            console.log(response)
        })
    }*/

    /*const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4,3],
          quality: 1
        })
    
        console.log(result)
    
        if(!result.cancelled){
          setImage(result.uri)
        }
    }*/

    return(
        <View style={styles.container}>
            <Header
                navigation={props.navigation}
            />
            
            {
                posts.length > 0 ?
                <FlatList
                    data={posts}
                    renderItem={({item}) => <Post
                    images={item.images}
                    postContent={item.postContent}
                    userId={item.userId}
                    postId={item.postId}
                    navigation={props.navigation}
                /> }
                keyExtractor={(item) => item.postId}
            />
            : <ActivityIndicator size="large" color="error" style={{marginTop: 50}} />
            }

            
        </View>
    )
}

export default HomePage