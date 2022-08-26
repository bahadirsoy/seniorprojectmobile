import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './post.styles.js'
import Slideshow from 'react-native-image-slider-show';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {

    //images
    const [images, setImages] = useState([])
    const [loadImages, setLoadImages] = useState(0)

    //post username
    const [username, setUsername] = useState('')

    //comment count
    const [commentCount, setCommentCount] = useState()

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

    //get comment count
    const getCommentCount = () => {
        axios.get("https://bezkoder-server.herokuapp.com/api/getCommentCount", {
            params: {
                postId: props.postId
            }
        })
        .then((response) => {
            setCommentCount(response.data[0].count)
        })
    }

    useEffect(() => {
        //get all photo urls and assign it into images variable
        props.images.split(" ").map(imageUrl => {
            images.push({
                url: "https://soyisibucket2.s3.eu-central-1.amazonaws.com/images/"+imageUrl
            })
        })
        setImages(images)
        setLoadImages(1)

        //get username
        getUsernameFromId()

        //get comment count
        getCommentCount()
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

            <View style={styles.postDetails}>
                <FontAwesomeIcon icon={ faComments } size={25} />
            </View>
        </View>
    )
}

export default Post