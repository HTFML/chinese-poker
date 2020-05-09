import { Dimensions, Platform } from 'react-native'

const { height } = Dimensions.get('window')
export const isSmallDevice = height < 700
export const isIos = Platform.OS === 'ios'

const colors = {
  red: '#FF7770'
}

export default {
  colors,
}