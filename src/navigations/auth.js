import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import welcome from "../screens/auth/welcome";
import login from "../screens/auth/login";
import signUp from "../screens/auth/signUp";
import { Text } from 'react-native';
import Colors from '../constants/colors';

const Project = createStackNavigator({

  welcome: {
    screen: welcome,
    navigationOptions: {
      headerShown: false
    },
  },
  login: {
    screen: login,
    navigationOptions: {
      title: <Text>Login</Text>,
      headerStyle: {
        backgroundColor: Colors.DARK.WHITE,
        height: 65,
      },
      headerTintColor: Colors.DARK.BLACK,
    },
  },
  signUp: {
    screen: signUp,
    navigationOptions: {
      title: <Text>SignUp</Text>,
      headerStyle: {
        backgroundColor: Colors.DARK.WHITE,
        height: 65,
      },
      headerTintColor: Colors.DARK.BLACK,
    },
  },
},

  {
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  }
);

export default createAppContainer(Project);