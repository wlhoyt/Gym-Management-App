import React, {useState} from 'react';
import {Input, Button} from 'react-native-elements';
import {View} from 'react-native'
import {auth} from '../firebase';
import { createUserWithEmailAndPassword} from '@firebase/auth';


const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name,setName] = useState('');
    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    return(
        <View>
        <Input
            placeholder="Enter your name"
            label="Name"
            leftIcon={{ type: 'material', name: 'badge' }}
            value={name}
            onChangeText={text => setName(text)}
        />
        <Input
            placeholder="Enter your email"
            label="Email"
            leftIcon={{ type: 'material', name: 'email' }}
            value={email}
            onChangeText={text => setEmail(text)}
        />
        <Input
            placeholder="Enter your password"
            label="Password"
            leftIcon={{ type: 'material', name: 'lock' }}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
        />
        <Button title="register" onPress={register} onPress = {()=>navigation.navigate('Login')} />
        </View>
    )
}

export default RegisterScreen
