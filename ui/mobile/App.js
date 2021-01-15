import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './components/Splash';
import Register from './components/Register';
import Login from './components/Log';
import Profile from './components/profile'

const App = createStackNavigator({
  Splash: {screen: Splash, navigationOptions: {headerShown: false}},
  Register: {screen: Register, navigationOptions: {headerShown: false}},
  Login: {screen:Login, navigationOptions: {headerShown: false}},
  Profile: {screen:Profile},
});

export default createAppContainer(App);
