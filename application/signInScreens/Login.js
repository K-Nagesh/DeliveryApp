import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import styles from './LoginStyles';

class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <Card>
            <Card.Title title={'Delivery App'}></Card.Title>
            <Card.Content>
              <TextInput label="Email"></TextInput>
              <TextInput label="Password" secureTextEntry={true}></TextInput>
              <Button uppercase={false} style={styles.button}>
                {'Forgot email/password'}
              </Button>
              <Button mode="contained" style={styles.button}>
                {'LOGIN'}
              </Button>
              <Button style={styles.button}>Register</Button>
            </Card.Content>
          </Card>
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
