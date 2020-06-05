import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
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

  useLayoutEffect(() => {navigation.setOptions({title: title})}, [navigation, title])

  const changeUsername = () => {
    let currentUser = firebase.auth().currentUser
    firebase.firestore().collection('users').doc(currentUser.uid).get()
    .then(resp => { 
      setUser(resp.data());
      console.log("fetch:" + user.email)
      console.log("fetch:" + user.username)
    })
    .catch(err => { console.log('Error: ', err) })
    
    console.log("Current User:" + currentUser.username)
    console.log("Current User:" + currentUser.email)
    console.log("Hooks User:" + user.username)
    console.log("Hooks User:" + user.email)
  }

  const changePassword = () => {
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

  const matchPasswords = () => {
    if (newPW===confirmPW){
      console.log("Same Passwords")
      currentUser.updatePassword(newPW)
      .then(() => {console.log("Password update successful!")})
      .catch(error => {console.log("An error occurred when changing passwords:", error)})
    } else return console.log("Passwords don't match")
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
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          onChangeText={text=>setNewPW(text)}
          value={newPW}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          onChangeText={text=>setConfirmPW(text)}
          value={confirmPW}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <Button
          title="SUBMIT" 
          onPress={()=>changePassword()}
          width={width-50}
          margin={15}
        />
        {/* <Text>{"\n"}Original pw: {password}</Text>
        <Text>New pw: {text}</Text>  */}
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
    paddingTop: 23,
    alignContent: 'center',
    justifyContent: 'center'
  }
})


export default ChangeScreen