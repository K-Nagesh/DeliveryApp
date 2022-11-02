import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {
  ActivityIndicator,
  Button,
  Card,
  FAB,
  IconButton,
  List,
  Title,
} from 'react-native-paper';
import HeaderComponent from '../HeaderComponent';
import Styles from './HomeStyles';

class Home extends Component {
  state = {
    person: 2,
  };
  render() {
    const {person} = this.state;
    return (
      <SafeAreaView style={Styles.content}>
        <HeaderComponent header={'Delivery App'}></HeaderComponent>
        <MapView
          style={Styles.content}
          initialRegion={{
            latitude: -3.722,
            longitude: -38.515,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}>
          {person == 1 ? (
            <View>
              <Marker
                description="Delivery persion 1"
                coordinate={{latitude: -3.723, longitude: -38.515}}></Marker>

              <Marker
                description="Delivery Person 2"
                coordinate={{latitude: -3.725, longitude: -38.517}}></Marker>

              <Marker
                description="Delivery 3"
                coordinate={{latitude: -3.721, longitude: -38.513}}></Marker>
            </View>
          ) : person == 2 ? (
            <View>
              <Marker
                description="origin"
                coordinate={{latitude: -3.723, longitude: -38.515}}></Marker>
              <Marker
                description="destination"
                coordinate={{latitude: -3.725, longitude: -38.517}}></Marker>
            </View>
          ) : null}
        </MapView>

        {person == 1 ? (
          <View>
            <FAB style={Styles.fab} icon="plus" />
          </View>
        ) : person == 2 ? (
          <Card>
            <Card.Content>
              <List.Item
                title="$ 15.00"
                description="Total Price of delivery"
                left={() => (
                  <IconButton
                    icon={'bike'}
                    size={30}
                    style={Styles.icon}
                    color={Styles.icon.color}
                  />
                )}
                right={() => (
                  <View>
                    <Button style={Styles.cancel}>Cancel</Button>
                    <Button mode="contained">Confirm</Button>
                  </View>
                )}
              />
            </Card.Content>
          </Card>
        ) : person == 3 ? (
          <View style={Styles.activity}>
            <ActivityIndicator animating={true} />
            <Title style={Styles.title}>
              Searching for a delivery person in your region
            </Title>
            <Button mode="contained" style={Styles.cancerOrder}>
              Cancel
            </Button>
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}

export default Home;
