import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import main from './main';
import auth from './auth';
import preferences from '../screens/preferences';

export default createAppContainer(
  createSwitchNavigator(
    {
      auth: auth,
      main: main,
      preferences: preferences
    },
    {
      initialRouteName: 'auth',
    }
  )
);