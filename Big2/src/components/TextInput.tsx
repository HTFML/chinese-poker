import React from 'react';
import { TextInput as NativeTextInput, View, StyleSheet, Keyboard, Dimensions } from 'react-native'
import { colors, isSmallDevice } from '../utils/Theme'
import { useFonts } from '@use-expo/font'

const { width } = Dimensions.get('window')

interface Props {
    width: string | number;
    value: string | number;
    onChangeText: (e: any) => void;
    placeholder: string;
    textInputProps: any;
}

const TextInput = (props: Props) => {

    let [fonts] = useFonts({
        'Dosis': require('../../assets/fonts/Dosis-Regular.ttf'),
    })
    
    const { width, value, onChangeText, placeholder, textInputProps } = props;
    if (!fonts) return null
    else {
        return (
            <View style={styles.container}>
                <NativeTextInput
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={colors.lightGrey}
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={onChangeText}
                    style={styles.textStyle}
                    {...textInputProps}
                    inlineImageLeft='search_icon'
                />
            </View>
        );
    }
};

TextInput.defaultProps = {
    width: width - 50,
};

const styles = StyleSheet.create({
    container: {
        overflow: 'scroll',
        width: width - 50,
        padding: isSmallDevice ? 9 : 13,
        borderColor: colors.white,
        borderWidth: 2,
        borderRadius: 20,
        margin: 10,
    },
    textStyle: {
        fontSize: isSmallDevice ? 14 : 20,
        color: "white",
        maxWidth: width - 50,
        maxHeight: isSmallDevice ? 35 : 50,
        marginVertical: isSmallDevice ? 3 : 4,
        fontFamily: 'Dosis'
    }
})

export default TextInput;
