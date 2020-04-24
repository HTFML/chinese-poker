import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert} from 'react-native';
 
const SettingsScreen = () => {

  const user = {
    username: "oneil",
    password: "password123"
  }
  
  return(
    <View style={styles.mainContainer}>
      <Text>Would you like to change your</Text>
      <Button 
        title="Username" 
        onPress={()=>Alert.alert("Changing Username")}
      />  
      <Text>or</Text> 
      <Button 
        title="Password"
        onPress={()=>Alert.alert("Changing Password")}
      /> 
      <Text>?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default SettingsScreen