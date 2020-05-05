import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet, Alert } from "react-native";
import Sound from 'react-native-sound'

const AudioScreen = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const [isSFXOn, setIsSFXOn] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitchFX = () => setIsSFXOn(previousState => !previousState);

  const templeSound = new Sound('temple_morning.mp3')

  componentDidMount = () => {
    templeSound.play()
  }

  return (
    <View style={styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <Text >Background Music</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#FF0000" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#FFFFFF"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text>Sound Effects</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#FF0000" }}
          thumbColor={isSFXOn ? "#FFFF00" : "#FFFFFF"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchFX}
          value={isSFXOn}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    padding: "5%",
    // justifyContent: 'center',
    // alignItems: 'center',
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

export default AudioScreen;
