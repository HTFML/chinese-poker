import React, { useState, useEffect } from "react";
import RedButton from '../components/Button'
import {
  View,
  StyleSheet,
} from "react-native";
import UserCard from '../components/UserCard';
import firebase from '../utils/firebaseConfig';
import '@firebase/firestore';

const Lobby = ({ navigation }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    setCurrentUser()
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

  return (
    <View style={styles.container}>
      <UserCard username={user.email} />
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <RedButton width='30%' title="Next" onPress={() => navigation.navigate('Play')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  modalContainer: {
    backgroundColor: "white",
    margin: 60,
    marginVertical: 360,
    borderRadius: 20,
  },
  modalView: {
    justifyContent: "center", 
    alignItems: "center", 
    margin: 0,
  },
});

export default Lobby;