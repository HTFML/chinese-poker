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
  }
})

export default PlayScreen;