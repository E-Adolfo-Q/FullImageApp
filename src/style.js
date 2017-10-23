import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: null,
    height: null,
    resizeMode:'cover',
    backgroundColor: 'lightgray',
    justifyContent:'center',
    alignItems: 'center'
  },
  text:{
    color: 'white',
    fontSize: 34,
    backgroundColor:'transparent',
    fontWeight:'600'
  }
});

export default styles;
