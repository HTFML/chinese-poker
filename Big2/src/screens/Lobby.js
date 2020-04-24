import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  Button,
  Alert,
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
        onPress: () => setModal(false)
      },
      
    ]);
    navigation.navigate("Home")
  };

  const handleYes = () => {
    setModal(false)
    navigation.navigate('Play', { userName: userName })
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{
            uri: "https://png.icons8.com/message/ultraviolet/50/3498db",
          }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Enter Your Username"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={(userName) => setUserName(userName)}
        />
      </View> */}
      <UserCard username={user.username} avatar={user.avatar}/>
      <UserCard/>
      <UserCard/>
      <UserCard/>

      <Button title="Next" onPress={() => setModal(true)} />

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
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    textAlign: "center",
    marginLeft: -30,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "red",
  },
  loginText: {
    color: "white",
  },
});

export default Lobby;
