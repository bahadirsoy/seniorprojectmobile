import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './post.styles.js'
import Slideshow from 'react-native-image-slider-show';

const Post = (props) => {

    const [images, setImages] = useState([])
    const [loadImages, setLoadImages] = useState(0)

    useEffect(() => {
        props.images.split(" ").map(imageUrl => {
            images.push({
                url: "https://soyisibucket2.s3.eu-central-1.amazonaws.com/images/"+imageUrl
            })
        })
        setImages(images)
        setLoadImages(1)
    }, [])


    return(
        <View>
            <Text>
                {props.postContent}
            </Text>

            <Slideshow 
                dataSource={images}
            />
        </View>
    )
}

export default Post