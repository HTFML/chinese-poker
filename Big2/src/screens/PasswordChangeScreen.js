import React, { useState } from 'react';
import Button from '../components/Button'
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native'

const PasswordChangeScreen = ({ route, navigation }) => {

  const { password } = route.params
  const [ originalPW, setOrginialPW ] = useState("")
  const [ newPW, setNewPW ] = useState("")
  const [ confirmPW, setConfirmPW ] = useState("")
  const [ text, setText ] = useState("")


  const confirmOldPassword = () => {
    if (originalPW === password){
      matchPasswords() 
    } else {
      setOrginialPW("")
      return Alert.alert("Please Enter Your Original Password")
    }
  }

  const matchPasswords = () => {
    if (newPW==confirmPW){
      setText(confirmPW)
      Alert.alert("Password Successfully Changed")
      navigation.navigate('Settings')
    } else {
      return Alert.alert("Passwords do not match!")
    }
  }

  const handleSubmit = () => {
    confirmOldPassword()
  }

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
        onPress={()=>handleSubmit()}
        width='45%'
        margin={10}
      />
      
      <Text>{"\n"}Original pw: {password}</Text>
      <Text>New pw: {text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    alignContent: "center",
    justifyContent: 'center'
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 3, 
    margin: 15
  }
})


export default PasswordChangeScreen