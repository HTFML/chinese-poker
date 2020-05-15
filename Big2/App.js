import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.js';
import PlayScreen from './src/screens/PlayScreen.js';
import Rules from './src/screens/Rules.js'
import Lobby from './src/screens/Lobby'
import SettingsScreen from './src/screens/SettingsScreen';
import PasswordChangeScreen from './src/screens/PasswordChangeScreen'
import AudioScreen from './src/screens/AudioScreen'
import EnviornmentChangeScreen from './src/screens/EnviornementChangeScreen'
import LoginScreen from './src/screens/Login.js'


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
          component={LoginScreen} 
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
        <Stack.Screen 
          name="Change Password"
          component={PasswordChangeScreen}
        />
        <Stack.Screen 
          name="Audio"
          component={AudioScreen}
        />
        <Stack.Screen 
          name="Enviornment"
          component={EnviornmentChangeScreen}
        />
      </Stack.Navigator>

    </NavigationContainer>
    )
}


export default App;