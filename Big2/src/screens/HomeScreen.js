import React, { useState } from 'react';
import Button from '../components/Button'
import { View, Text, StyleSheet, Image } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore'

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(null)

  const currentUser = () => {
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

  return (
    <View style={styles.mainContainer}>
<<<<<<< HEAD
      {!user && currentUser()}
=======
      {user ? null : load()}
>>>>>>> password
      <Text style={styles.header}>
        Welcome {user && user.email}
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
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  }
})

export default HomeScreen;