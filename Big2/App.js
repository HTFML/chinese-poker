import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/tabscreens/HomeScreen.js';
import PlayScreen from './src/components/tabscreens/PlayScreen.js';
import Rules from './src/components/tabscreens/Rules.js'
import LoginScreen from './src/components/Login.js'
import Signup from './src/components/tabscreens/Signup.js'


const Stack = createStackNavigator();

const getUserData = (user) => {
console.log(user)
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          getUserData={getUserData}
        />
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
        <Stack.Screen
          name="Signup"
          component={Signup}
        />

      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App;