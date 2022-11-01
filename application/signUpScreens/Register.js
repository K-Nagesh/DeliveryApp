import React, {Component} from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';
import {Appbar, Button, TextInput} from 'react-native-paper';
import HeaderComponent from './HeaderComponent';
import Styles from './RegisterStyles';

class Register extends Component {
  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <ScrollView>
          <HeaderComponent header={'Register'} />
          <View style={Styles.content}>
            <TextInput label={'Name'} />
            <TextInput label={'Email'} keyboardType="email-address" />
            <TextInput
              label={'Password'}
              secureTextEntry={true}
              right={
                <TextInput.Icon
                  name={'eye-off-outline'}
                  color={Styles.icon.color}
                />
              }
            />
            <TextInput
              label={'Confirm Password'}
              secureTextEntry={true}
              right={
                <TextInput.Icon
                  name={'eye-off-outline'}
                  color={Styles.icon.color}
                />
              }
            />
            <TextInput label={'Phone Number'} keyboardType="number-pad" />
            <Button mode="contained" style={Styles.button}>
              {'REGISTER'}
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Register;
