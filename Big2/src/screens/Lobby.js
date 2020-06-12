import React, { useState } from "react";
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
  const [user, setUser] = useState(null)

  const setCurrentUser = () => {
    let currentUser = firebase.auth().currentUser
    firebase.firestore().collection('users').doc(currentUser.uid).get()
    .then(resp => {setUser(resp.data())})
    .catch(err => {console.log('Error: ', err)})
  }

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

  const handleYes = () => {
    setModal(false)
    navigation.navigate('Play', { userName: user.username })
  }

  return (
    <View style={styles.container}>
      {!user && setCurrentUser()}
      <UserCard username={user && user.username}/>
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

