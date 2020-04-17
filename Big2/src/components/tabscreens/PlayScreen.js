import React from 'react';
import { View, Text } from 'react-native';

const PlayScreen = ({ route }) => {
  const { userName } = route.params
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Play!</Text>
      <Text>{userName}</Text>
    </View>
  )
}

export default PlayScreen;