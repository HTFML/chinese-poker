import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  let handlePress = () => {
    navigation.navigate('Lobby', {
      title: 'This is the lobby',
      date: 25
    })
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity>
        <Text style={{fontSize: 23}} onPress={handlePress}>Home!</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 40}}>Rules</Text>
    </View>
      
      // <Button 
      //   title="Play Now!"
      //   onPress={handlePress} 
      // />
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default HomeScreen;