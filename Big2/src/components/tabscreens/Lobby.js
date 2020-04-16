import React, {useState} from 'react'
import {View, StyleSheet, Image, TextInput, TouchableHighlight, Text} from 'react-native'

export default function Lobby() {
    
    const [userName, setUserName] = useState('')

    return (
        
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
                    <TextInput style={styles.inputs}
                        placeholder="user name"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(userName) => setUserName({ userName })} />
                </View>

  

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => onClickListener('login')}>
                    <Text style={styles.loginText}>Play</Text>
                </TouchableHighlight>
                {/* <TouchableHighlight style={[styles.buttonContainer, styles.ageButton]} onPress={() => onClickListener('login')}>
                    <Text style={styles.loginText}>Are you under 18 years old?</Text>
                    <Button></Button>
                </TouchableHighlight> */}

                
            </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },

    
    loginButton: {
      backgroundColor: "red",
    },
    loginText: {
      color: 'white',
    }
  });
