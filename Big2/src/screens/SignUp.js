import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Alert, TouchableOpacity } from 'react-native';
import firebase from '../utils/firebaseConfig';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { colors } from '../utils/Theme';
import { useFonts } from '@use-expo/font'

const width = Dimensions.get('window').width

const SignUp = ({ navigation }) => {

  let [fonts] = useFonts({
    'Chelsea-Market': require('../../assets/fonts/Chelsea-Market.ttf'),
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSignup = () => {
    if (!validateEmail(email)) {
      Alert.alert(
        "Please Enter a Valid Email",
        "Try Again",
        [
          { text: "OK" }
        ],
        { cancelable: false }
      );
    } else if (password !== confirmPassword) {
      Alert.alert(
        "Passwords Need to Match",
        "Try Again",
        [
          { text: "OK" }
        ],
        { cancelable: false }
      );
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(resp => {
        if (resp){
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
  
  if (!fonts) return null
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image 
          source={require('../../assets/cards.jpg')} 
          style={styles.img}
        />
        <Text style={styles.title}>Big 2</Text>
      </View>
      <View style={styles.signup}>
        <TextInput placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
        <TextInput placeholder="Password" value={password} onChangeText={text => setPassword(text)} textInputProps={{ secureTextEntry: true }} />
        <TextInput placeholder="Confirm Password" value={confirmPassword} onChangeText={text => setConfirmPassword(text)} textInputProps={{ secureTextEntry: true }} />
        <Button title='SIGN UP' onPress={handleSignup} width={width-50} />
        <TouchableOpacity style={{ margin: 15}} onPress={() => navigation.popToTop()}>
          <Text style={{ fontFamily: 'Dosis', textDecorationLine: 'underline' }}>Already have an account?
              <Text style={{ fontWeight: 'bold'}}> Sign In</Text> 
          </Text>
        </TouchableOpacity>
          <Text  style={{top: 30, fontFamily: 'Dosis'}}>
              By signing up, you agree to our Terms of Service and Private Policy 
          </Text>
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
  title: {
    color: colors.yellow,
    fontSize: 42,
    fontFamily: 'Chelsea-Market'
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