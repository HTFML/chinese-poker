import React from 'react';
import { View, Alert, Text } from 'react-native';
import Button from '../components/Button'
import { styles } from '../styles'
 
const SettingsScreen = ({ navigation }) => {

  return(
    <View style={styles.center}>
      <Button 
        title="USER NAME" 
        onPress={()=>navigation.navigate("Change Screen", {title: "Change Username"})}
      /> 
      <Button 
        title="PASSWORD" 
        onPress={()=>navigation.navigate("Change Screen", {title: "Change Password"})}
      />  
      <Button 
        title="AUDIO" 
        onPress={()=>Alert.alert("Audio Changes coming soon")}
      />
      <Button 
        title="ENVIORNMENT" 
        onPress={()=>Alert.alert("Enviornment Changes coming soon")}
      />
    </View>
  )
}

export default SettingsScreen