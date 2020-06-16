import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import Button from '../components/Button'
import GreenFelt from '../../assets/greenfelt.jpg'

const height = Dimensions.get('window').height

const PlayScreen = ({ route, navigation }) => {

  return (
    <ImageBackground style={styles.background} source={GreenFelt}>
      <View style={styles.buttonContainer}>
        <Button
          title="Exit"
          width="18%"
          height= {30}
          onPress={()=>navigation.navigate("Post Game")}
        />
      </View>
      <View style={styles.mainContainer}>
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
  buttonContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    padding: 10,
    marginTop: .05 * height,
  },
  mainContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default PlayScreen;