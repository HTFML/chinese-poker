import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

interface Props {
  username: string,
  avatar: string
}

const UserCard = (props: Props) => {

  const { username, avatar } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{uri: avatar}}
      />
      <View style={styles.textContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin : 10,
    borderRadius: 5,
    borderWidth: 1,
    width: Dimensions.get('window').width/1.2,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 50,
  },
  avatar: {
    borderRadius: 100/2,
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
});

UserCard.defaultProps = {
  username: 'Bot',
  avatar: 'https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg' 
}

export default UserCard;

