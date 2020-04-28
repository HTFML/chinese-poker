import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';

const PasswordChangeScreen = ({ route }) => {

  const { user } = route.params

  return(
    <View style={styles.mainContainer}>
      <TextInput style = {styles.input}
        placeholder = "Current Password"
        autoCapitalize = "none"
      />
      <TextInput style = {styles.input}
        placeholder = "New Password"
        autoCapitalize = "none"
      />
      <TextInput style = {styles.input}
        placeholder = "New Password, again"
        autoCapitalize = "none"
      />
      <Button title="Submit"
        onPress={()=>Alert.alert("Password Changed")}
      />
      <Text>{user.password}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    width: 200
 }
})


export default PasswordChangeScreen