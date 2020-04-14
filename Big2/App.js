import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/tabscreens/HomeScreen.js';
import PlayScreen from './src/components/tabscreens/PlayScreen.js';
import Rules from './src/components/tabscreens/Rules.js'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Play"
          component={PlayScreen}
        />
        <Stack.Screen 
          name="Rules"
          component={Rules}
        />

      </Stack.Navigator>
    </NavigationContainer>
    )
}


export default App;