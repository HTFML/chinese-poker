import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert} from 'react-native';
 
const SettingsScreen = ({ navigation }) => {

  const user = {
    username: "oneil",
    password: "password123"
  }
  
  return(
    <View style={styles.mainContainer}>
      <Text>Change your</Text>
      <Button 
        title="Password" 
        onPress={()=>navigation.navigate("Change Password", {user})}
      />  
      <Button title="Volume" onPress={()=>Alert.alert("Changing Volume coming soon")}/>
      <Button title="Background" onPress={()=>Alert.alert("Changing background coming soon")}/>
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