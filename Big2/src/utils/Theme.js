import { Dimensions, Platform } from 'react-native'

const { height } = Dimensions.get('window')
export const isSmallDevice = height < 700
export const isIos = Platform.OS === 'ios'

export const colors = {
  red: '#FF7770',
  grey: '#b3b3b3',
  darkGrey: '#808080',
  yellow: '#ffff00'
}