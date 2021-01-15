/* eslint-disable prettier/prettier */
import  React,{Component} from 'react';
import {StyleSheet, ImageBackground,View,Alert, Button,Text} from 'react-native';
import {

 Container,
 
  

} from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

var gb = require('./images/b.jpg');


class Register extends Component {
  constructor() {
    super();
    this.state = {
      UserName: '',
      UserEmail: '',
      UserPassword: '',
    };
}
UserRegistrationFunction = () =>{

  fetch('http://10.0.2.2:80/user_registration.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      name: this.state.UserName,

      email: this.state.UserEmail,

      password: this.state.UserPassword,

    }),

  }).then((response) => response.json())
        .then((responseJson) => {

  // Showing response message coming from server after inserting records.
          Alert.alert(responseJson);

        }).catch((error) => {
          console.error(error);
        });
}

render() {
  return (
    <Container>
      
      <ImageBackground source={gb} style={{height: '100%', width: '100%'}}>
<View style={styles.MainContainer}>

      <Text style= {styles.title}>User Registration </Text>

      <TextInput
        placeholder=" User Name"
        onChangeText={name => this.setState({UserName : name})}
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
        />
      <TextInput
        placeholder=" User Email"
        onChangeText={email => this.setState({UserEmail : email})}
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
        />
      <TextInput
        placeholder=" User Password"
        onChangeText={password => this.setState({UserPassword : password})}
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
        secureTextEntry={true}
        />
      <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" />
    
      <Text style={styles.moto}>Already registred! Login Me</Text>

         
</View>
</ImageBackground>

</Container>
  );
}}

export default Register;

const styles = StyleSheet.create({
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin: 10,
  },
  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
  },
  title:{
    fontSize: 22,
    color: '#009688',
    textAlign: 'center',
    marginBottom: 15,
  },
  moto: {
         marginLeft: 110,
         marginTop: 40,
      },
  });
