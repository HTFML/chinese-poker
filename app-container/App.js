import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlayScreen from './src/components/tabscreens/PlayScreen.js';
import DeliveryScreen from './src/components/tabscreens/DeliveryScreen.js';
import HomeScreen from './src/components/tabscreens/HomeScreen.js';
import RewardsScreen from './src/components/tabscreens/RewardsScreen.js';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Play: PlayScreen,
    Delivery: DeliveryScreen,
    Rewards: RewardsScreen
  });

export default createAppContainer(TabNavigator);
