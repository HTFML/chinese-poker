import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert} from 'react-native';
 
const SettingsScreen = ({ navigation }) => {

  const user = {
    username: "oneil",
    password: "password123"
  }
  
  return(
    <View style={styles.mainContainer}>
      
      <Button 
        title="Password" 
        onPress={()=>navigation.navigate("Change Password", {user})}
      />  
      <Button 
        title="Audio" 
        onPress={()=>navigation.navigate("Audio")}
      />
      <Button 
        title="Enviornment" 
        onPress={()=>navigation.navigate("Enviornment")}
      />
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