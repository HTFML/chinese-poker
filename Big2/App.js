import React from 'react';
import { decode, encode } from 'base-64'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.js';
import PlayScreen from './src/screens/PlayScreen.js';
import Rules from './src/screens/Rules.js'
import Lobby from './src/screens/Lobby'
import SettingsScreen from './src/screens/SettingsScreen';
import ChangeScreen from './src/screens/ChangeScreen'
import AudioScreen from './src/screens/AudioScreen'
import EnviornmentChangeScreen from './src/screens/EnviornementChangeScreen'
import Login from './src/screens/Login.js'
import {decode, encode} from 'base-64'

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen 
          name="Login"
          component={Login} 
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
          name="Lobby"
          component={Lobby}
        />
        <Stack.Screen 
          name="Rules"
          component={Rules}
        />
        <Stack.Screen 
          name="Settings"
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;