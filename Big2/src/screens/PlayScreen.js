import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import Button from '../components/Button'
import GreenFelt from '../../assets/greenfelt.jpg'
import DropSite from "../components/DropSite";
import Card from "../components/Card";

const height = Dimensions.get('window').height

const PlayScreen = ({ route, navigation }) => {

  const onDragStart = (e, title) => {
    e.dataTransfer.setData("title", title);
}

  const onDragOverAllowDrop = (e) => {
    e.preventDefault();
}
  const onDragOverForbideDrop = (e) => {
    e.stopPropagation()
}

  const onDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("title")
    e.target.appendChild(document.getElementById(data))
}

  return (
    <ImageBackground style={styles.background} source={GreenFelt}>
      <View style={styles.buttonContainer}>
        <Button
          title="Exit"
          width="18%"
          height= {30}
          onPress={()=>navigation.navigate("Post Game")}
        />
      </View>
      <View style={styles.mainContainer}>
        <Text>Play!</Text>
        <DropSite
          onDrop={onDrop}
          onDragOverAllowDrop={onDragOverAllowDrop} />
        <div style={{display: 'flex'}}>
          <Card
            title='Card 1'
            onDragStart={onDragStart} 
            onDragOverForbideDrop={onDragOverForbideDrop} 
            />
          <Card
            title='Card 2'
            onDragStart={onDragStart} 
            onDragOverForbideDrop={onDragOverForbideDrop} 
            />
        </div>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    padding: 10,
    marginTop: .05 * height,
  },
  mainContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default PlayScreen;