import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';

const PasswordChangeScreen = ({route}) => {

  const { user } = route.params
  const [
    value, 
    submittedPassword
  ] = useState("")

  const confirmedPassword = () => {       
    if (submittedPassword==="hello"){
      return Alert.alert("Correct Password!")
    }
    else {return Alert.alert("Try again")}
  }

    return(
      <View 
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 23
      }}
      >
        <TextInput 
          style = {{
            margin: 15,
            height: 40,
            borderWidth: 1,
            width: 200}}
          placeholder = "Current Password"
          autoCapitalize = "none"
          onChangeText={text=>submittedPassword(text)}
          value={value}
        />
        {/* <TextInput style = {styles.input}
          placeholder = "New Password"
          autoCapitalize = "none"
        />
        <TextInput style = {styles.input}
          placeholder = "New Password, again"
          autoCapitalize = "none"
        /> */}
        <Button title="Submit"
          onPress={confirmedPassword}
        />
        <Text>{user.password}</Text>
        
      </View>
    )

//   const styles = StyleSheet.create({
  
//     mainContainer: {
//     flex: 1,
//     alignItems: 'center',
//     paddingTop: 23
//   },
//   input: {
//     margin: 15,
//     height: 40,
//     borderWidth: 1,
//     width: 200
//  }
// })
}




export default PasswordChangeScreen