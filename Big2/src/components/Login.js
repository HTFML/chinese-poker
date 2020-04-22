import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from '../styles/styles.js'
import firebase from 'firebase'
import { firebaseConfig } from './firebaseConfig'

const Login = () => {
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
      console.log(resp)
    })
  }

return (
      <View style={styles.center}>
        <Text style={styles.title}>Email</Text>
        <TextInput style={styles.title} autoCapitalize='none' onChange={handleEmail}/>
        <Text style={styles.title}>Password</Text>
        <TextInput style={styles.title} secureTextEntry autoCapitalize='none' onChange={handlePassword}/>
        <Button title='Login' onPress={handleLogin}/>
      </View>
    );
}

export default Login;