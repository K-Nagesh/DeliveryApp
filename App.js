import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {theme} from './application/AppStyles';
import Login from './application/signInScreens/Login';
import {Provider as Paperprovider} from 'react-native-paper';
import Register from './application/signUpScreens/Register';
import Home from './application/home/Home';

const App = () => {
  return (
    <Paperprovider theme={theme}>
      <Home />
    </Paperprovider>
  );
};

export default App;
