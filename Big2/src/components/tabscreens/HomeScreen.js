import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { styles } from '../../styles/styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Welcome to Chinese Poker(Big 2) User!</Text>
      <Image
        source={require('../../Images/chinese_poker_hand.jpg')}
        style={styles.img}
      />
      <Button title='PLAY NOW' onPress={() => navigation.navigate('Play')} />
      <Button title='RULES' onPress={() => navigation.navigate('Rules')} />
    </View>
  );
};

export default HomeScreen;
