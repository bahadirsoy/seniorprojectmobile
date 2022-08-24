import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

//import components
import Post from '../../components/Post/post';

const HomePage = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://bezkoder-server.herokuapp.com/api/getPosts", {

        })
        .then(response => {
            response.data.map((post) => {
                posts.push(post)
            })
            setPosts(posts)
        })
    })

    return(
        <View>
            <Post/>
        </View>
    )
}

export default HomePage