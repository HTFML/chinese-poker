import React from 'react';
import { View, Text } from 'react-native';

class RewardsScreen extends React.Component {
  render() {
    console.log('test')
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Rewards!</Text>
      </View>
    );
  }
}

export default RewardsScreen;