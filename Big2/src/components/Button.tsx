import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    color?: string;
    width?: number;
    height?: number;
    margin?: number;
}

const Button = (props: Props) => {

  const { title, onPress, backgroundColor, color, width, height, margin } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        height,
        width,
        backgroundColor,
        margin 
      }}
    >
      <Text style={{
        ...styles.text,
        color,
        
      }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      shadowColor: "black",
      shadowOffset: {
        width: -10,
        height: 10,
      },
      shadowOpacity: 2.28,
      shadowRadius: 15.25,

      elevation: 22,
    },
    text: {
      alignItems: 'center', 
      fontWeight: 'bold',
      letterSpacing: 1.1,
      fontSize: 16
    }
})

Button.defaultProps = {
  backgroundColor: "red",
  color: "yellow",
  width: '50%',
  height: 45,
  margin: 5,
}


export default Button;
