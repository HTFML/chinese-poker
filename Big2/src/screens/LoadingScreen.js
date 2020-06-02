import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native'

const LoadingScreen = () => {
  return (
    <View styles={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default LoadingScreen;
