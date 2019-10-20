import React from 'react';
import {ScrollView, View, Text, Button} from 'react-native';
import Atbutton from '@ant-design/react-native/lib/button';

// 组件
import MyCard from './Card';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '待办',
    headerRight: (
      <Button title="aaa" onPress={() => alert('This is a button!')} />
    ),
  };
  render() {
    return (
      <ScrollView>
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </ScrollView>
    );
  }
}
