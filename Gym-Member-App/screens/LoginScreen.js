import React, {useState} from 'react'
import { View,StyleSheet } from 'react-native'
import { auth } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from '@firebase/auth';
import {Input, Button} from 'react-native-elements';

const provider = new GoogleAuthProvider();

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // const signInGoogle = () =>{
    //     signInWithPopup(auth, provider)
    //     .then((result) => {
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         const credential = GoogleAuthProvider.credentialFromResult(result);
    //         const token = credential.accessToken;
    //         // The signed-in user info.
    //         const user = result.user;
    //         // ...
    //     }).catch((error) => {
    //         // Handle Errors here.
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // The email of the user's account used.
    //         const email = error.email;
    //         // The AuthCredential type that was used.
    //         const credential = GoogleAuthProvider.credentialFromError(error);
    //         // ...
    //     });
    // }

    const signIn = () =>{
        // Sign In Function from Firebase Documentation
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigation.replace('Root', {screen:'HomeScreen'});
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
}
    // Rendering Inputs 
    return (
        <View style = {buttonStyle.container}>
            <Input
                placeholder = "Enter Your Email"
                label = "Email"
                leftIcon = {{type: 'material', name: 'email'}}
                value = {email}
                onChangeText= {text =>setEmail(text)}
            />
            <Input
                placeholder = "Enter Your Password"
                label = "Password"
                leftIcon = {{type: 'material', name: 'lock'}}
                value = {password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />

            <Button title = 'sign in' style = {buttonStyle.title} onPress = {signIn}/>
            <Button title = 'register' style = {buttonStyle.title} onPress = {()=>navigation.navigate('Register')}/>
            {/* <Button title = 'sign in with Google' style = {buttonStyle.title} onPress = {signInGoogle}/> */}
        </View>
    )
}

const buttonStyle = StyleSheet.create({
    container:{
        flex: .6,
        padding: 24,
        justifyContent: 'space-between'
    },
    title:{
        marginTop: 16,
        paddingVertical: 16,
        borderWidth: 4,
        textAlign:'center',
        fontSize: 60,
    }   
})
export default LoginScreen
