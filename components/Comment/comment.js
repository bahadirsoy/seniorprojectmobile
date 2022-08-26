import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './comment.styles.js';

const Comment = ({commentContent, userId}) => {
    return(
        <View>
            <TouchableOpacity>
                <Text>Username</Text>
            </TouchableOpacity>

            <Text> {commentContent} </Text>
        </View>
    )
}

export default Comment