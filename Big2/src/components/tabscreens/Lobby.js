import React, {useState} from 'react'
import {View, StyleSheet, Image, TextInput, TouchableHighlight, Text, Button, Alert} from 'react-native'
import Modal from 'react-native-modal';


export default function Lobby() {
    
  const [isModalVisible, setModal] = useState(false)
  const [userName, setUserName] = useState('')

  const handleNo = () => {}

    return (
        
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Enter Your Username"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(userName) => setUserName({ userName })} />
                        
                </View>
  
                <Button title="Next" onPress={() => setModal(true)} />
        <Modal isVisible={isModalVisible} style={{backgroundColor: 'white', margin:60, marginVertical: 360, borderRadius: 20}}>
          <View style={{justifyContent: 'center', alignItems: 'center', margin: 0}} >
            <Text>Are you over 21?
            </Text>
            
            <View style={{flexDirection: 'row'}}>
              <Button title="Yes"/>
              <Button title="No" onPress={() => setModal(false)} />
            </View>
          </View>
        </Modal>

        
          

                {/* <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => setModal(false)}>
                <Modal isVisible={this.state.isModalVisible}>
                  <View style={{flex: 1}}>
                    <Text>Hello!</Text>
                    <Button title="Hide modal" onPress={this.toggleModal} />
                  </View>
                  </Modal>
                    <Text style={styles.loginText}>Next</Text>
                </TouchableHighlight> */}

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
        textAlign: "center",
        marginLeft:-30,
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
