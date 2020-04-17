import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { styles } from '../../styles/styles';

const PlayScreen = () => {
  return (
    <ImageBackground
      source={require('../../Images/poker_table_felt.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Play!</Text>
      </View>
    </ImageBackground>
  );
};

export default PlayScreen;
