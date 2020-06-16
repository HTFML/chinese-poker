import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Button from '../components/Button'
import GreenFelt from '../../assets/greenfelt.jpg'

const PlayScreen = ({ route, navigation }) => {

  return (
    <ImageBackground style={styles.background} source={GreenFelt}>
      <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
        <Button
          title="Exit"
          width="18%"
          height= {30}
          onPress={()=>navigation.navigate("Post Game")}
        />
      </View>
      <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
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
  },
})

export default PlayScreen;