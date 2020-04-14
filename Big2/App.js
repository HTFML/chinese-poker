import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.js';
import PlayScreen from './src/screens/PlayScreen.js';
import Rules from './src/screens/Rules.js'
import LoginScreen from './src/screens/Login.js'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ gestureEnabled: false }}
      >
        {/* <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        /> */}
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