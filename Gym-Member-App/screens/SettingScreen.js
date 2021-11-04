import React from 'react'
import { View } from 'react-native'
import { auth } from '../firebase'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { signOut } from '@firebase/auth'
const SettingScreen = ({navigation}) => {
    const Logout = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.replace('Login')

        }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }
    return (
        <View>
            <Button title = 'Logout' onPress = {Logout} />   
        </View>
    )
}

export default SettingScreen
