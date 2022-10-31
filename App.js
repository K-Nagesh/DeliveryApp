import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {theme} from './application/AppStyles';
import Login from './application/signInScreens/Login';
import {Provider as Paperprovider} from 'react-native-paper';

const App = () => {
  return (
    <Paperprovider theme={theme}>
      <Login />
    </Paperprovider>
  );
};

export default App;
