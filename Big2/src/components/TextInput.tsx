import React from 'react';
import { TextInput as NativeTextInput, View, StyleSheet, Keyboard, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

interface Props {
    value: string | number;
    onChange: (e: any) => void;
    placeholder: string
}

const TextInput = (props: Props) => {
    return (
        <View style={styles.container}>
            <NativeTextInput 
            placeholder = 'put your name'

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 25,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 5
    }
})

export default TextInput;
