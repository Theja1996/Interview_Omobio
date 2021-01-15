/* eslint-disable prettier/prettier */
import  React,{Component} from 'react';
import {Text, StyleSheet, ImageBackground,Alert,TextInput,View,  Button} from 'react-native';
import {


  Container

} from 'native-base';

var gb = require('./images/r.jpg');


  class Login extends Component {
    constructor(props) {

      super(props);

      this.state = {

        UserEmail: '',
        UserPassword: '',

      };

    }

  UserLoginFunction = () =>{

   const { UserEmail }  = this.state;
   const { UserPassword }  = this.state;


  fetch('http://10.0.2.2:80/User_Login.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      email: UserEmail,

      password: UserPassword,

    }),

  }).then((response) => response.json())
        .then((responseJson) => {

          // If server response message same as Data Matched
         if (responseJson === 'Data Matched')
          {

              //Then open Profile activity and send user email to profile activity.
              this.props.navigation.navigate('Second', { Email: UserEmail });

          }
          else {

            Alert.alert(responseJson);
          }

        }).catch((error) => {
          console.error(error);
        });


    }

    render(){
  return (
    <Container>
       <ImageBackground source={gb} style={{height: '100%', width: '100%'}}>
    <View style={styles.MainContainer}>
     
      <Text style= {styles.TextComponentStyle}>User Login </Text>

  <TextInput

   
    placeholder=" User Email"

    onChangeText={UserEmail => this.setState({UserEmail})}

    
    underlineColorAndroid="transparent"

    style={styles.TextInputStyleClass}
  />

  <TextInput

   
    placeholder=" User Password"

    onChangeText={UserPassword => this.setState({UserPassword})}

    
    underlineColorAndroid="transparent"

    style={styles.TextInputStyleClass}

    secureTextEntry={true}
  />

  <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />

     
      </View>
      </ImageBackground>
      </Container>
  );
}
  }
export default Login;

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

   TextComponentStyle: {
     fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginBottom: 15,
   },
  });
