import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native';
import firebase from '../utils/firebaseConfig';
import TI from '../components/TextInput';
import Button from '../components/Button';
import { colors } from '../utils/Theme';
import { useFonts } from '@use-expo/font'
import { BorderlessButton } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width

const Login = ({ navigation }) => {
  
  let [fonts] = useFonts({
    'Chelsea-Market': require('../../assets/fonts/Chelsea-Market.ttf'),
    'Dosis': require('../../assets/fonts/Dosis-Regular.ttf'),
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(err => {
      console.log('Error: ', err);
    });
  }

  if (!fonts) {
    return null
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image 
            source={require('../../assets/cards.jpg')} 
            style={styles.img}
          />
          <Text style={styles.title}>BIG 2</Text>
        </View>
        <View style={styles.login}>
          <TI placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
          <TI placeholder="Password" value={password} onChangeText={text => setPassword(text)} textInputProps={{ secureTextEntry: true }} />
          <Button  title='LOG IN' onPress={handleLogin} width={width-50} />
          <TouchableOpacity style={{ margin: 15}} onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ fontFamily: 'Dosis', textDecorationLine: 'underline'}}>Don't have an account?
              <Text style={{ fontWeight: 'bold' }}> Sign Up</Text> 
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
  login: {
    alignItems: 'center',
    margin: 10,
  }
})

export default Login;
