import React, {Component} from 'react';
import {Appbar} from 'react-native-paper';

class HeaderComponent extends Component {
  render() {
    return (
      <Appbar>
        <Appbar.BackAction />
        <Appbar.Content title={this.props.header} />
      </Appbar>
    );
  }
}

export default HeaderComponent;
