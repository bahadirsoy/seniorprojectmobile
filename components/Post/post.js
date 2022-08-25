import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './post.styles.js'
import Slideshow from 'react-native-image-slider-show';
import axios from 'axios'

const Post = (props) => {

    //images
    const [images, setImages] = useState([])
    const [loadImages, setLoadImages] = useState(0)

    //post username
    const [username, setUsername] = useState('')

    //get getUsernameFromId
    const getUsernameFromId = (() => {
        axios.get("https://bezkoder-server.herokuapp.com/api/getUsernameFromId", {
            params: {
                userId: props.userId
            }
        })
        .then((response) => {
            setUsername(response.data[0].username)
        })
    })

    useEffect(() => {
        //get all photo urls and assign it into images variable
        props.images.split(" ").map(imageUrl => {
            images.push({
                url: "https://soyisibucket2.s3.eu-central-1.amazonaws.com/images/"+imageUrl
            })
        })
        setImages(images)
        setLoadImages(1)

        getUsernameFromId()
    }, [])


    return(
        <View style={styles.postContainer}>
            <Text style={styles.username}>
                {username}
            </Text>

            <Text style={styles.postContent}>
                {props.postContent}
            </Text>

            <Slideshow 
                dataSource={images}
                height={300}
            />
        </View>
    )
}

export default Post