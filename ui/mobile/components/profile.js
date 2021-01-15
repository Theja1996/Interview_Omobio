

import React, {Component} from 'react';
import { ImageBackground} from 'react-native';
import {
 List,
 ListItem
} from 'native-base';


var gb = require('./images/b.jpg');


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      UserEmail: '',
      UserPassword: '',
    };
  }
  GetRecode = () => {
    var UserName = this.state.UserName;
    var  UserEmail = this.state.UserEmail;
    var UserPassword = this.state.UserPassword;

    if (RollNo.length == 0 || StudentName.length == 0 || Course.length == 0) {
     
      var GetAPIURL = 'http://10.0.2.2:80/user_registration.php';

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application.json',
      };

      var Data = {
        UserName:  UserName,
        UserEmail: UserEmail,
        UserPassword:UserPassword,
      };
      fetch(GetAPIURL, {
        method: 'GET',
        headers: headers,
        body: JSON.stringify(Data),
      })


  );

  .then((responce)=>{
    return responce.json();
  })
        .then((responce) => {
          alert(responce[0].Message);
        })
        .catch((error) => {
          alert('Error' + error);
        });
    }
  };

  render() {
    return (
      <Container style={styles.cont}>
        <ImageBackground source={gb} style={{height: '100%', width: '100%'}}>
          <Content>
          <List>
            <ListItem>
              <Text onChangeText={(UserName) => this.setState({UserName})}>{'UserName'}</Text>
            </ListItem>
            <ListItem>
              <Text  onChangeText={(UserEmail) => this.setState({UserEmail})}>{'UserEmail'}</Text>
            </ListItem>
            <ListItem>
              <Text  onChangeText={( UserPassword) => this.setState({ UserPassword})}>{' UserPassword'}</Text>
            </ListItem>
          </List>
            
    
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Profile;

