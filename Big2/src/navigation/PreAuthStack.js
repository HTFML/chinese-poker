import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'

const Stack = createStackNavigator()

const PreAuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen 
          name='Login' 
          component={Login}
          options={{ animationTypeForReplace: 'push' }}
        />
        <Stack.Screen 
          name='SignUp'
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default PreAuthStack