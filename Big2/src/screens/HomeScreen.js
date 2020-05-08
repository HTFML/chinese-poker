import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, AsyncStorage } from 'react-native';
import TextInput from '../components/TextInput'

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(null)

  const load = () => {
      AsyncStorage.getItem(`userData`)
      .then(r => {
        let data = JSON.parse(r)
        setUser(data)
      })  
  }

  return (
    <View style={styles.mainContainer}>
      {user ? null : load()}
      <TextInput />
      <Text style={styles.header}>
        Welcome {user ? user.user.email : null}
      </Text>
      <Image 
        source={require('../../assets/cards.jpg')} 
        style={styles.img} 
      />
      <Button 
        title="PLAY NOW"
        onPress={() => navigation.navigate('Lobby')}
      />
      <Button 
        title="RULES"
        onPress={() => navigation.navigate('Rules')}
      /> 
      <Button 
        title="SETTINGS"
        onPress={() => navigation.navigate('Settings')}
      /> 
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  }
})


export default HomeScreen;