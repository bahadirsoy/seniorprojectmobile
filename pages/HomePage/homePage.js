import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import components
import Post from '../../components/Post/post';

const HomePage = () => {

    //all posts informations
    const [posts, setPosts] = useState([])

    useEffect(() => {
        AsyncStorage.getItem("userId").then(val => console.log(val)) //print current users id

        //fetch all posts
        axios.get("https://bezkoder-server.herokuapp.com/api/getPosts", {

        })
        .then(response => {
            //store posts in state
            setPosts(response.data)
        })
    }, [])

    return(
        <View>
            <Text>POSTLAR</Text>

            <FlatList
                data={posts}
                renderItem={({item}) => <Post
                    images={item.images}
                    postContent={item.postContent}
                    userId={item.userId}
                /> }
                keyExtractor={(item) => item.postId}
            />

            {
                //print all posts
                /*posts ?
                posts.map(post => {
                    return(
                        <Post
                            key={post.postId}
                            images={post.images}
                            postContent={post.postContent}
                        />
                    )
                }) : null*/
            }
        </View>
    )
}

export default HomePage