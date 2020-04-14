import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/tabscreens/HomeScreen.js';
import PlayScreen from './src/components/tabscreens/PlayScreen';
import Lobby from './src/components/tabscreens/Lobby';


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
          name="Lobby"
          component={Lobby}
        />
        
      </Stack.Navigator>

    </NavigationContainer>
    )
}


export default App;