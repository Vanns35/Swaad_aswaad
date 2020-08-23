import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

//Drawer Menu
import tabs from './tabs';
import profile from '../screens/profile';

//components
import NotificationIcon from "../components/notificationIcon";
import Colors from '../constants/colors';

export default createStackNavigator(
  {
    main: {
      screen: tabs,
      navigationOptions: () => ({
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }),
    },
    profile: {
      screen: profile,
      navigationOptions: () => ({
        title: <Text>Profile</Text>,
        headerRight: () => <NotificationIcon />,
        headerStyle: {
          backgroundColor: Colors.DARK.HEADER_ORANGE,
          height: 70,
        },

      }),
    },
  },
  {
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      headerStyle: {
        backgroundColor: Colors.DARK.FAINT_ORANGE,
      },
      headerTintColor: Colors.DARK.WHITE,
    },
  }
);