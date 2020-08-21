import { StyleSheet } from 'react-native';

export const FaceListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    width: '100vw',
  },
  name: {
    marginLeft: 10
  },
  avatar: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#3f51b5',
    borderRadius: 50
  }
});
