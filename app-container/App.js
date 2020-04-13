import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlayScreen from './src/components/tabscreens/PlayScreen.js';
import DeliveryScreen from './src/components/tabscreens/DeliveryScreen.js';
import HomeScreen from './src/components/tabscreens/HomeScreen.js';
import RewardsScreen from './src/components/tabscreens/RewardsScreen.js';

// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: HomeScreen,
//     Play: PlayScreen,
//     Delivery: DeliveryScreen,
//     Rewards: RewardsScreen
//   });

// export default createAppContainer(TabNavigator);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}


export default App;