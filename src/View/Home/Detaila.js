import React from 'react';
import {View, Text} from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'detaila',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
