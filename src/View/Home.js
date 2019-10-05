import React from 'react';
import {View, Text, Button} from 'react-native';
import Antb from '@ant-design/react-native/lib/button';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerRight: (
      <Button onPress={() => alert('This is a button!')} title="Info" />
    ),
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="click go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Antb>Start</Antb>
      </View>
    );
  }
}
