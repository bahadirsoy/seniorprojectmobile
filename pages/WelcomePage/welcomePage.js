import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const WelcomePage = () => {
    return(
        <View>
            <View>
                <Text>Welcome</Text>
            </View>

            <View>
                <Text>
                    CheckRoommate is social media like program that helps you to find roommate. 
                    You must sign in to continue. You can create new account if you don't have one yet.
                </Text>
            </View>

            <View>
                <TouchableOpacity>
                    <Text>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomePage