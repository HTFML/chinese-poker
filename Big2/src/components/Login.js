import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from '../styles/styles.js'
import firebase from 'firebase'
import { firebaseConfig } from './firebaseConfig'

const Login = ({ navigation, getUserData }) => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [username, setUsername] = useState(null)

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = (username) => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
   }
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(resp => {
        console.log(resp),
        setUsername(resp.user);
        // getUserData(resp.user);
        console.log(props.getUserData);
    })
  }

  const handleSignup = () => {
  }

  const outToggle = () => {
    setUsername(!username)
  }

return (
      <View style={styles.center}>
        <>
        <Text style={styles.title}>Email</Text>
        <TextInput style={styles.title} autoCapitalize='none' onChange={handleEmail}/>
        <Text style={styles.title}>Password</Text>
        <TextInput style={styles.title} secureTextEntry autoCapitalize='none' onChange={handlePassword}/>
        <Button title={username ? 'Login' : 'Sign Up'} onPress={
          handleLogin
          // ,() => navigation.navigate('Home')
        }
        />
        <Button title="Zignup" onPress={
          outToggle
        }/>
        <>
        </>
        {/* { !`${username}` 
        ? <Button title='Signup' onPress={handleSignup}>Sign Up</Button>
        : <></>
        } */}

        </>
      </View>
    );
}

export default Login;