import React, { useState, useEffect } from 'react';
import Button from '../components/Button'
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import firebase from '../utils/firebaseConfig';
import '@firebase/firestore';
import { useFonts } from '@use-expo/font'

const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState(null)

//   useEffect(() => {
//     let currentUser = firebase.auth().currentUser
//     console.log(currentUser)
//     setUser(currentUser)
//   }, [])

  let [fonts] = useFonts({
    'Dosis': require('../../assets/fonts/Dosis-Regular.ttf'),
  })

  useFocusEffect(() => {
    let currentUser = firebase.auth().currentUser
    console.log(currentUser.displayName);    
    setUserName(currentUser.displayName)
  })
 
  const handleSignOut = () => {
    firebase.auth().signOut()
  }

  if (!fonts) return null
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>
        Welcome {userName}
      </Text>
      <Image 
        source={require('../../assets/cards.jpg')} 
        style={styles.img} 
      />
      <Button 
        title="PLAY NOW"
        onPress={() => navigation.navigate('Lobby')}
        width='45%'
        margin={10}
      />
      <Button 
        title="RULES"
        onPress={() => navigation.navigate('Rules')}
        width='45%'
        margin={10}
      />
      <Button 
        title="SETTINGS"
        onPress={() => navigation.navigate('Settings')}
        width='45%'
        margin={10}
      />
      <Button
        title='SIGN OUT'
        onPress={handleSignOut}
        width='45%'
        margin={10}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontFamily: 'Dosis',
    margin: 15,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  }
})

export default HomeScreen;
