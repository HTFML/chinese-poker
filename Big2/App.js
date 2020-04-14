import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/tabscreens/HomeScreen.js';
import RulesScreen from './src/components/tabscreens/Rules.js'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        rulesRoute="Rules"
        screenOptions={{ gestureEnabled: true }}
      >
        <Stack.Screen
          name="Rules"
          component={RulesScreen}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}


export default App;