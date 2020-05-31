import React, { useState, useEffect } from 'react';
import firebase from './src/utils/firebaseConfig';
import '@firebase/firestore';
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
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'
import PostAuthStack from './src/navigation/PostAuthStack'
import PreAuthStack from './src/navigation/PreAuthStack'

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) setUser(user)
      else setUser(null)
    })
  })

  const setCurrentUser = () => {
    let currentUser = firebase.auth().currentUser
    
    firebase.firestore().collection('users').doc(currentUser.uid).get()
    .then(resp => {
      if (!resp.exists) {
        console.log('No such User!');
      } else {
        setUser(resp.data())
      }
    })
    .catch(err => {
      console.log('Error: ', err);
    });
  }

  return user ? (
    <PostAuthStack />
  ) : (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     // initialRouteName="Login"
    //     screenOptions={{ gestureEnabled: false }}
    //   >
    //     {user === null ? (
    //       <>
    //       <Stack.Screen 
    //         name="Login"
    //         component={Login} 
    //       />
    //       <Stack.Screen 
    //         name="SignUp"
    //         component={SignUp}
    //       />
    //       </>
    //     ) : (
    //       <>
    //       <Stack.Screen 
    //         name="Home" 
    //         component={HomeScreen} 
    //       />
    //       <Stack.Screen 
    //         name="Play"
    //         component={PlayScreen}
    //       />
    //       <Stack.Screen 
    //         name="Lobby"
    //         component={Lobby}
    //       />
    //       <Stack.Screen 
    //         name="Rules"
    //         component={Rules}
    //       />
    //       <Stack.Screen 
    //         name="Settings"
    //         component={SettingsScreen}
    //       />
    //       </>
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>
    <PreAuthStack />
  )
}

export default App;