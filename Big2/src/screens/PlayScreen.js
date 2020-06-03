import React, { useEffect } from 'react';
import Orientation from 'react-native-orientation-locker'
import { View, Text } from 'react-native';

const PlayScreen = ({ route }) => {

  _onOrientationDidChange = (orientation) => {
    if (orientation == 'PORTRAIT') {
      Orientation.lockToLandscape();
    }
  }
  
  // componentWillUnmount() {
  //   Orientation.unlockAllOrientations()
  //   Orientation.removeOrientationListener(this._onOrientationDidChange);
  // }

  useEffect(() => {   
    Orientation.lockToLandscape();
    Orientation.addOrientationListener(this._onOrientationDidChange);
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Play!</Text>
    </View>
  )
}

export default PlayScreen;