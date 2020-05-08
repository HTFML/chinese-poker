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

const Lobby = ({ navigation }) => {
  const [isModalVisible, setModal] = useState(false);
  const [userName, setUserName] = useState("");

  const user = {
    username: 'Aibek',
    avatar: 'https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg' 
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
    // navigation.navigate("Home")
  };

  const handleYes = () => {
    setModal(false)
    navigation.navigate('Play', { userName: userName })
  }

  return (
    <View style={styles.container}>
      <UserCard username={user.username} avatar={user.avatar}/>
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

