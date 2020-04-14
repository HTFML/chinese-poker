import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text 
        style={styles.header}>
        Welcome to Chinese Poker(Big 2) User!
      </Text>
      <Image 
        source={require('../../Images/cards.jpg')} 
        style={styles.img} 
      />
      <Button 
        title="PLAY NOW"
        onPress={() => navigation.navigate('Play')}
      />
      <Button 
        title="RULES"
        onPress={() => navigation.navigate('Rules')}
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