import React, { useState, useEffect } from "react";
import RedButton from '../components/Button'
import {
  View,
  StyleSheet,
  Text,
  Alert,
  Button,
} from "react-native";
import Modal from "react-native-modal";
import UserCard from '../components/UserCard';
import firebase from '../utils/firebaseConfig';
import '@firebase/firestore';
const Lobby = ({ navigation }) => {
  const [isModalVisible, setModal] = useState(false);
  const [user, setUser] = useState({})

  const handleNo = () => {
    Alert.alert("Sorry", "You must be 21 or older to play!", [
      {
        text: "Ok",
        onPress: () => {
          setModal(false)
          navigation.navigate("Home")
        }
      },
    ]);
  };

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

  const handleYes = () => {
    setModal(false)
    navigation.navigate('Play')
  }

  return (
    <View style={styles.container}>
      <UserCard username={user.email} />
      <UserCard/>
      <UserCard/>
      <UserCard/>

      <RedButton width='30%' title="Next" onPress={() => setModal(true)} />

      <Modal isVisible={isModalVisible} style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text>Are you over 21?</Text>
          <View style={{ flexDirection: "row" }}>
            <Button title="Yes" onPress={handleYes} />
            <Button title="No" onPress={handleNo} />
          </View>
        </View>
      </Modal>

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

