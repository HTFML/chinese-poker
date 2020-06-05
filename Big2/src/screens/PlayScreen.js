import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import GreenFelt from '../../assets/greenfelt.jpg'

const PlayScreen = ({ route }) => {

  return (
    <ImageBackground style={styles.background} source={GreenFelt}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Play!</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})

export default PlayScreen;