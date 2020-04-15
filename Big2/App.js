import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/tabscreens/HomeScreen.js';
import RulesScreen from './src/components/tabscreens/Rules.js';
import { Text, Button, View} from 'react-native';

const Stack = createStackNavigator();

const App = ({ navigation }) => {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        rulesRoute="Rules"
        screenOptions={{ gestureEnabled: false }}
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
    <View>
    <Button title="Rules" onPress={() => navigation.navigate('Rules')}>
    Rules
    </Button>
    </View>
    </NavigationContainer>

    )
}


export default App;