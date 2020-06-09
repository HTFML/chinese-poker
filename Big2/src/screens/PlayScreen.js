import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import GreenFelt from '../../assets/greenfelt.jpg'
import DropSite from "../components/DropSite";
import Card from "../components/Card";

const PlayScreen = ({ route }) => {

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Play!</Text>
        <DropSite
          onDrop={onDrop}
          onDragOverAllowDrop={onDragOverAllowDrop} />
        <Card
          title='Card title'
          onDragStart={onDragStart} 
          onDragOverForbideDrop={onDragOverForbideDrop} 
          />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})

export default PlayScreen;