import {StyleSheet} from 'react-native';
import {theme} from '../AppStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingTop: 0,
    padding: 15,
  },
  icon: {
    color: theme.colors.primary,
  },
  button: {
    marginVertical: 15,
  },
});
