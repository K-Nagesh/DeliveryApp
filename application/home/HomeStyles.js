import {StyleSheet} from 'react-native';
import {theme} from '../AppStyles';
export default StyleSheet.create({
  content: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 16,
  },
  marker: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
  cancel: {
    marginBottom: 10,
  },
  activity: {
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  icon: {
    color: theme.colors.primary,
    marginTop: 20,
  },
  title: {
    marginTop: 40,
    margin: 20,
    color: theme.colors.primary,
    textAlign: 'center',
  },
  cancerOrder: {
    position: 'absolute',
    margin: '2%',
    bottom: 0,
    width:'96%'
  }
});
