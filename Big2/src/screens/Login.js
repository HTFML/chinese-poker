import React, { useState } from 'react';
import { View, Text, Button, TextInput, AsyncStorage } from 'react-native';
import { styles } from '../styles.js';
import firebase from 'firebase';
import { firebaseConfig } from '../components/firebaseConfig';

const Login = ({ navigation }) => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = () => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
   }
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(resp => {
        setUserData(true)
        AsyncStorage.setItem(`userData`, JSON.stringify(resp))
    })
  }

  const auth = () => {
    navigation.navigate('Home')
  }

return (
      <View style={styles.center}>
        <Text style={styles.title}>Email</Text>
        <TextInput style={styles.title} autoCapitalize='none' onChange={handleEmail}/>
        <Text style={styles.title}>Password</Text>
        <TextInput style={styles.title} secureTextEntry autoCapitalize='none' onChange={handlePassword}/>
        <Button title='Login' onPress={handleLogin}/>
        {userData ? auth() : null}
      </View>
    );
}

export default Login;