//This is an example of Tab inside Navigation Drawer in React Native//
import React from 'react';
import { Text } from 'react-native';
//import react in our code.
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome, Ionicons, Feather } from '@expo/vector-icons';
//Import all the screens for Tab

import home from '../screens/home';
import favourites from '../screens/favourites';
import calendar from '../screens/calendar';
import shoppingList from '../screens/shoppingList';
import profile from '../screens/profile';

import NotificationIcon from "../components/notificationIcon";
import Colors from '../constants/colors';

const Home_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  HomePage: {
    screen: home,
    navigationOptions: () => ({
      title: <Text style={{ color: Colors.DARK.BLACK }}>Home</Text>,
      headerStyle: {
        backgroundColor: Colors.DARK.WHITE,
        height: 65,
      },
      headerRight: () => <NotificationIcon />,
      headerTintColor: Colors.DARK.BLACK,
    }),
  },
});

const Favourites_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  favourites: {
    screen: favourites,
    navigationOptions: () => ({
      title: <Text style={{ color: Colors.DARK.BLACK }}>Favourites</Text>,
      headerStyle: {
        backgroundColor: Colors.DARK.WHITE,
        height: 65,
      },
      headerRight: () => <NotificationIcon />,
      headerTintColor: Colors.DARK.BLACK,
    }),
  },
});

const Calendar_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  calendar: {
    screen: calendar,
    navigationOptions: () => ({
      title: <Text style={{ color: Colors.DARK.BLACK }}>Calendar</Text>,
      headerStyle: {
        backgroundColor: Colors.DARK.WHITE,
        height: 65,
      },
      headerRight: () => <NotificationIcon />,
      headerTintColor: Colors.DARK.BLACK,
    }),
  },
});


const ShoppingList_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  shoppingList: {
    screen: shoppingList,
    navigationOptions: () => ({
      title: <Text style={{ color: Colors.DARK.BLACK }}>Shopping List</Text>,
      headerStyle: {
        backgroundColor: Colors.DARK.WHITE,
        height: 65,
      },
      headerRight: () => <NotificationIcon />,
      headerTintColor: Colors.DARK.BLACK,
    }),
  },
});

const Profile_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  ProfilePage: {
    screen: profile,
    navigationOptions: () => ({
      headerShown: false
    }),
  },
});

const Tabs = createMaterialTopTabNavigator(

  {
    home: {
      screen: Home_StackNavigator,
      navigationOptions: () => ({
        title: 'home',
        tabBarIcon: ({ tintColor }) => <FontAwesome name="home" size={23} color={tintColor} />,
      }),
    },
    favourites: {
      screen: Favourites_StackNavigator,
      navigationOptions: () => ({
        title: 'favourites',
        tabBarIcon: ({ tintColor }) => <Ionicons name="md-star" size={25} color={tintColor} />,
      }),
    },
    calendar: {
      screen: Calendar_StackNavigator,
      navigationOptions: () => ({
        title: 'calendar',
        tabBarIcon: ({ tintColor }) => <Feather name="calendar" size={23} color={tintColor} />,
      }),
    },
    shoppingList: {
      screen: ShoppingList_StackNavigator,
      navigationOptions: () => ({
        title: 'shopping List',
        tabBarIcon: ({ tintColor }) => <Feather name="shopping-bag" size={23} color={tintColor} />,
      }),
    },
    profile: {
      screen: Profile_StackNavigator,
      navigationOptions: () => ({
        title: 'profile',
        tabBarIcon: ({ tintColor }) => <Feather name="user" size={23} color={tintColor} />,
      }),
    },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: Colors.DARK.HEADER_ORANGE,
      inactiveTintColor: Colors.DARK.LIGHT_GRAY,
      style: {
        backgroundColor: Colors.DARK.WHITE,
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 10,
        textTransform: "capitalize",
        color: '#5a5a5a',
        marginBottom: 1,
        width: 200
      },
      indicatorStyle: {
        borderBottomColor: Colors.DARK.WHITE,
        borderBottomWidth: 2,
      },
    },
  }
);

export default Tabs;