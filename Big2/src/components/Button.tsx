import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
}

const Button = (props: Props) => {

  const { title, onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 45,
      width: '50%',
      borderRadius: 20,
      margin: 5,
      backgroundColor: "red",
    },
    text: {
      alignItems: 'center', 
      fontWeight: 'bold',
      letterSpacing: 1.1,
      color: 'yellow',
    }
})



export default Button;
