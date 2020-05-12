import React from 'react';
import Button from '../components/Button'
import { View, Alert } from 'react-native';
import { styles } from '../styles'
 
const SettingsScreen = ({ navigation }) => {

  const user = {
    username: "oneil",
    password: "password123"
  }
  
  return(
    <View style={styles.center}>
      <Button 
        title="USER NAME" 
        onPress={()=>navigation.navigate("Change Password", {username: user.username})}
        width='45%'
        margin={10}
      />
      <Button 
        title="PASSWORD" 
        onPress={()=>navigation.navigate("Change Password", {password: user.password})}
        width='45%'
        margin={10}
      />  
      <Button 
        title="AUDIO" 
        onPress={()=>navigation.navigate("Audio")}
        width='45%'
        margin={10}
      />
      <Button 
        title="ENVIORNMEENT" 
        onPress={()=>navigation.navigate("Enviornment")}
        width='45%'
        margin={10}
      />
    </View>
  )
}

export default SettingsScreen