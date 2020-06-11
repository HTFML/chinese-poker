import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { colors } from '../utils/Theme';
import firebase from '../utils/firebaseConfig';
import '@firebase/firestore';

const width = Dimensions.get('window').width

const ChangeScreen = ({ route, navigation }) => {

  const { title } = route.params
  const currentUser = firebase.auth().currentUser
  const [ user, setUser ] = useState(null)
  const [ newUserName, setNewUsername ] = useState("")
  const [ originalPW, setOrginialPW ] = useState("")
  const [ newPW, setNewPW ] = useState("")
  const [ confirmPW, setConfirmPW ] = useState("")
  const [ userNames, setUserNames ] = useState([])

  useLayoutEffect(() => {navigation.setOptions({title: title})}, [navigation, title])

  const getUserNames = () => {
    let usersRef = firebase.firestore().collection('users')
    let allUsers = usersRef.get()
      .then(resp => {
        resp.forEach(doc => {
          setUserNames(doc.data().username)
        })
      })
      .catch(err => {console.log('Error getting users', err)});
  }

  const changeUsername = () => {
    getUserNames()
    firebase.firestore().collection('users').doc(currentUser.uid).get()
    .then(resp => { 
      setUser(resp.data());
    })
    .catch(err => { console.log('Error: ', err) })
    // currentUser.updateProfile({username:"Mitch"})
  }

  const changePassword = () => {
    if(originalPW === "" || newPW === "" || confirmPW === ""){
      Alert.alert("Please don't leave any fields blank")
    } else {
    let credential = firebase.auth.EmailAuthProvider.credential(
      currentUser.email, 
      originalPW
    )
    currentUser.reauthenticateWithCredential(credential)
    .then(() => {
      console.log("ReAuthenticated")
      matchPasswords()
    })
    .catch(() => {Alert.alert("Please enter your original password correctly")})
    }
  }

  const matchPasswords = () => {
    if (newPW===confirmPW){
      console.log("Same Passwords")
      currentUser.updatePassword(newPW)
      .then(() => 
        {Alert.alert("Password update successful!")
        navigation.navigate('Settings')
      })
      .catch(error => {Alert.alert("An error occurred when changing passwords:", error)})
    } else return Alert.alert("Passwords entered do not match")
  }

  if (title=="Change Password") {
    return(
      <View style={styles.container}> 
        <TextInput
          style={styles.input}
          placeholder="Enter Orginal Password"
          onChangeText={text=>setOrginialPW(text)}
          value={originalPW}
          autoCapitalize="none"
          textInputProps={{ secureTextEntry: true }}
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          onChangeText={text=>setNewPW(text)}
          value={newPW}
          autoCapitalize="none"
          textInputProps={{ secureTextEntry: true }}          
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          onChangeText={text=>setConfirmPW(text)}
          value={confirmPW}
          autoCapitalize="none"
          textInputProps={{ secureTextEntry: true }}
        />
        <Button
          title="SUBMIT" 
          onPress={()=>changePassword()}
          width={width-50}
          margin={15}
        />
      </View>
    )
  } else if (title=="Change Username"){
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter New Username"
          onChangeText={text=>setNewUsername(text)}
          value={newUserName}
          autoCapitalize="none"
        />
        <Button
          title="SUBMIT" 
          onPress={()=>changeUsername()}
          width={width-50}
          margin={15}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: colors.red,
    justifyContent: 'center'
  }
})


export default ChangeScreen