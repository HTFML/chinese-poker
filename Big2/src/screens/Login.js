import React, { useState } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { styles } from '../styles.js';
import firebase from 'firebase';
import { firebaseConfig } from '../utils/firebaseConfig';
import TextInput from '../components/TextInput';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState(null)
  const [signup, setSignup] = useState(false)

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const firebaseInit = () => {
    if (firebase.apps.length === 0) {
    return  firebase.initializeApp(firebaseConfig);
   }
  }

  const handleLogin = () => {
    firebaseInit()
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(resp => {
        if (resp){
          setUserData(true)
          AsyncStorage.setItem(`userData`, JSON.stringify(resp))
        }
    })
  }

  const handleSignup = () => {
    firebaseInit()
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(resp => {
        if (resp){
          setUserData(true)
          AsyncStorage.setItem(`userData`, JSON.stringify(resp))
        }
    })
  }

  const authToggle = () => {
    setSignup(!signup)
  }

  const auth = () => {
    navigation.navigate('Home')
  }

return (
      <View style={styles.center}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
        <Text style={styles.title}>Password</Text>
        <TextInput placeholder="Password" value={password} onChangeText={text => setPassword(text)} textInputProps={{ secureTextEntry: true }} />
        <Button title={signup ? `Already have an account?` : `New user?`} onPress={authToggle} />
        <Button title={signup ? 'Signup' : 'Login'} onPress={signup ? handleSignup : handleLogin}/>
        {userData ? auth() : null}
      </View>
    );
}

export default Login;