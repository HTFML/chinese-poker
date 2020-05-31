import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Alert, TouchableOpacity } from 'react-native';
import firebase from '../utils/firebaseConfig';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { colors } from '../utils/Theme';

const width = Dimensions.get('window').width

const SignUp = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userData, setUserData] = useState(null)

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSignup = () => {
    if (password !== confirmPassword) {
      Alert.alert(
        "Passwords Need to Match",
        "Try Again",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    } else if (validateEmail(email)) {
      Alert.alert(
        "Please Enter a Valid Email",
        "Try Again",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    } else {
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
      <View style={styles.signup}>
        <TextInput placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
        <TextInput placeholder="Password" value={password} onChangeText={text => setPassword(text)} textInputProps={{ secureTextEntry: true }} />
        <TextInput placeholder="Confirm Password" value={confirmPassword} onChangeText={text => setConfirmPassword(text)} textInputProps={{ secureTextEntry: true }} />
        <Button title='SIGN UP' onPress={handleSignup} width={width-50} />
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Text>Already have an account?
              <Text style={{ fontWeight: 'bold'}}> Sign In</Text> 
          </Text>
        </TouchableOpacity>
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
  signup: {
    alignItems: 'center',
    margin: 10,
  }
})

export default SignUp;