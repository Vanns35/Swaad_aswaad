import React from 'react';
import { AsyncStorage } from 'react-native';
import Router from './navigations/root';

class AppRouter extends React.Component {
  componentDidMount = async() => {
    let login = await AsyncStorage.getItem('login');

    if (login == null) {
      AsyncStorage.setItem('login', 'false');
    }
  }
  
  render() {
    return (
      <Router />
    )
  }
}

export default AppRouter;