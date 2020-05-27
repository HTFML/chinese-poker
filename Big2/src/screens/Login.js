import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
// import { styles } from '../styles.js';
import firebase from 'firebase';
import { firebaseConfig } from '../utils/firebaseConfig';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { colors } from '../utils/Theme';
import { BorderlessButton } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState(null)
  const [signup, setSignup] = useState(false)

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
        }
     })
    .catch(err => {
      console.log('Error: ', err);
    });
  }

  const handleSignup = () => {
    firebaseInit()
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(resp => {
        if (resp){
          setUserData(true)
          firebase.firestore().collection('users').doc(resp.user.uid).set({
            email: email,
          })
        }
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  }

  const authToggle = () => {
    setSignup(!signup)
  }

  const auth = () => {
    navigation.navigate('Home')
  }

return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image 
            source={require('../../assets/cards.jpg')} 
            style={styles.img}
          />
          <Text style={{color: colors.yellow, fontSize: 36, fontWeight: 'bold'}}>Big 2</Text>
        </View>
        <View style={styles.login}>
          {/* <Text style={styles.title}>Email</Text> */}
          <TextInput placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
          {/* <Text style={styles.title}>Password</Text> */}
          <TextInput placeholder="Password" value={password} onChangeText={text => setPassword(text)} textInputProps={{ secureTextEntry: true }} />
          <Button title={signup ? 'SIGN UP' : 'LOG IN'} onPress={signup ? handleSignup : handleLogin} width={width-50} />
          <Text>Don't have an account? 
              <Text style={{ fontWeight: 'bold'}}> Sign Up</Text> 
          </Text>
          {/* <Button title={signup ? `Already have an account?` : `New user?`} onPress={authToggle} width={width-50} /> */}
          {userData && auth()}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.red,
  },
  titleContainer: {
    alignItems: 'center',
    margin: 20
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  },
  login: {
    alignItems: 'center',
    margin: 10,
  }
})

export default Login;
