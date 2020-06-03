import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import firebase from '../utils/firebaseConfig';
import '@firebase/firestore';

const width = Dimensions.get('window').width

const ChangeScreen = ({ route, navigation }) => {

  const { title } = route.params
  const [ user, setUser ] = useState(null)
  const [ newUserName, setNewUsername ] = useState("")
  const [ originalPW, setOrginialPW ] = useState("")
  const [ newPW, setNewPW ] = useState("")
  const [ confirmPW, setConfirmPW ] = useState("")

  useLayoutEffect(() => {navigation.setOptions({title: title})}, [navigation, title])

  const changeUsername = () => {
    let currentUser = firebase.auth().currentUser
    firebase.firestore().collection('users').doc(currentUser.uid).get()
      .then(resp => { setUser(resp.data()) })
      .catch(err => { console.log('Error: ', err) })
    
    console.log(currentUser.username, user.username)
    console.log(currentUser.email, user.email)
  }

  const changePassword = () => {
    let currentUser = firebase.auth().currentUser
    currentUser.updatePassword("password")
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