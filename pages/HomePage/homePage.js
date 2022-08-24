import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import components
import Post from '../../components/Post/post';

const HomePage = () => {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(0)

    useEffect(() => {
        AsyncStorage.getItem("userId").then(val => console.log(val))
        axios.get("https://bezkoder-server.herokuapp.com/api/getPosts", {

        })
        .then(response => {
            response.data.map((post) => {
                posts.push(post)
            })
            setPosts(posts)
            setIsLoading(1)
        })
    })

    return(
        <View>
            <Text>POSTLAR</Text>
            {
                posts ?
                posts.map(post => {
                    return(
                        <Post
                            images={post.images}
                            postContent={post.postContent}
                        />
                    )
                }) : null
            }
        </View>
    )
}

export default HomePage