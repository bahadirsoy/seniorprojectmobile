import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './userInformations.styles.js'

const UserInformations = () => {
    return(
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}> Username: </Text>
                <Text style={styles.infoText}> Name: </Text>
                <Text style={styles.infoText}> Surname: </Text>
                <Text style={styles.infoText}> E-mail: </Text>
                <Text style={styles.infoText}> Phone: </Text>
            </View>
        </View>
    )
}

export default UserInformations