import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },

  title: {
    fontSize: 20,
    marginBottom: 16,
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  splashBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#7EBF41',
  },
});
