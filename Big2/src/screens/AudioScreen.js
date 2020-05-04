import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from "react-native";

const AudioScreen = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const [isSFXOn, setIsSFXOn] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitchFX = () => setIsSFXOn(previousState => !previousState);

  return (
      <View style={styles.mainContainer}>
        <Text >Background Music</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text>Sound Effects</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isSFXOn ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchFX}
          value={isSFXOn}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
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
