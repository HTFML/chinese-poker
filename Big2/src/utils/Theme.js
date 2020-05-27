import { Dimensions, Platform } from 'react-native'

const { height } = Dimensions.get('window')
export const isSmallDevice = height < 700
export const isIos = Platform.OS === 'ios'

export const colors = {
  red: '#ff4d4d',
  grey: '#b3b3b3',
  darkGrey: '#808080',
  yellow: '#ffff00',
  white: '#ffffff',
  lightGrey: '#d9d9d9',
}