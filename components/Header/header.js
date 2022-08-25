import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './header.styles.js'

const Header = () => {
    return(
        <View style={styles.header}>
            <View style={styles.welcomeUserView}>
                <Text style={styles.welcomeUserText}>kanka</Text>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.profileButton}>
                    <Text style={styles.buttonText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.buttonText}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header