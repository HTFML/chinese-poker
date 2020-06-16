import React, { useState, useEffect } from "react";
import Button from '../components/Button'
import { View, StyleSheet } from "react-native";
import UserCard from '../components/UserCard';
import { colors } from '../utils/Theme'
import firebase from '../utils/firebaseConfig';
import '@firebase/firestore';

const Lobby = ({ navigation }) => {
  
  const [user, setUser] = useState({})

  useEffect(() => {
    setCurrentUser()
  }, [])

  const setCurrentUser = () => {
    let currentUser = firebase.auth().currentUser
    setUser(currentUser)
    // Function below currently not needed but might be neccessary for later
    // ------------------------------------------------------------------------
    // firebase.firestore().collection('users').doc(currentUser.uid).get()
    // .then(resp => {
    //   if (!resp.exists) console.log('No such User!');
    //   else setUser(resp.data())
    // })
    // .catch(err => {
    //   console.log('Error: ', err);
    // });
  }

  return (
    <View style={styles.container}>
      <UserCard username={user.displayName} />
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <Button width='30%' title="Next" onPress={() => navigation.navigate('Play')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.red,
  },
});

export default Lobby;