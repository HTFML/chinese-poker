import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/styles.js'

class Screen1 extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Screen 1</Text>
      </View>
    );
  }
}

export default Screen1;