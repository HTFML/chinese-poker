import React from 'react';
import { View, Button } from 'react-native';
import { styles } from '../styles'
 
const SettingsScreen = ({ navigation }) => {
  
  return(
    <View style={styles.center}>
      <Button 
        title="Password" 
        onPress={()=>navigation.navigate("Change Password")}
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

export default SettingsScreen