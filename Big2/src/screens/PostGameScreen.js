import React, { useState, useLayoutEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button'
import firebase from '../utils/firebaseConfig';
import '@firebase/firestore';
import { colors } from '../utils/Theme';

const PostGameScreen = ({ navigation }) => {

  const [userName, setUserName] = useState("")

  useLayoutEffect(() => {navigation.setOptions({ headerLeft: null, title: "" })})

  useFocusEffect(() => {
    let currentUser = firebase.auth().currentUser
    setUserName(currentUser.displayName)
  })

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Done so soon, {userName}?</Text>
      <Button
        title="Let's Play Again"
        onPress={()=>{navigation.navigate("Lobby")}}
        margin={10}
      />
      <Button
        title="Take Me Home"
        onPress={()=>{navigation.navigate("Home")}}
        margin={10}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.red,
    padding: 10
  },
  textStyle: {
    alignItems: 'center', 
    letterSpacing: 1.1,
    fontSize: 22,
    fontFamily: 'Chelsea-Market',
    margin: 25,
  }
});

export default PostGameScreen;
