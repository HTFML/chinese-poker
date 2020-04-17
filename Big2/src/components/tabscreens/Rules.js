import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Rules = ({ navigation, route }) => {

  const { title, date } = route.params

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{title}</Text>
      <Text>{date}</Text>
    </View>
  )
}

export default Rules;