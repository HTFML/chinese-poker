import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
 
const SettingsScreen = () => {

  
  return(
    <View style={styles.mainContainer}>
      <Text>
        Settings!
      </Text>
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

export default SettingsScreen