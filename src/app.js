
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  View
} from 'react-native';

import styles from './style'

export default class FullImageApp extends Component {
  render() {
    return (
        <Image source={require('./image/background03.jpg')} style={styles.container}>
           <Text style={styles.text}>FullScreen</Text>
        </Image>
    );
  }
}

AppRegistry.registerComponent('FullImageApp', () => FullImageApp);
