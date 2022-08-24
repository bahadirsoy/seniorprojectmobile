import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './post.styles.js'


const Post = (props) => {
    return(
        <View>
            <Text>
                Post
                {console.log(props.images.split(" ")[0])}
                {console.log(props.postContent)}
                {console.log("---------------------")}
            </Text>
            <Image
                style={styles.postImage}
                source={{
                uri: `https://soyisibucket2.s3.eu-central-1.amazonaws.com/images/1654681367676asda2.jpg`,
            }}
            />
        </View>
    )
}

export default Post