/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, ImageBackground, Text} from 'react-native';

var gb = require('./images/cold-bg.jpg');

export default class Splash extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('Register');
    }, 5000);
  }

  render() {
    return (
      <ImageBackground source={gb} style={{height: '100%', width: '100%'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 60}}>Omobio</Text>
        </View>
      </ImageBackground>
    );
  }
}
