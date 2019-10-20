import React from 'react';
import {ScrollView, View, Text, Button} from 'react-native';
import Atbutton from '@ant-design/react-native/lib/button';

// 组件
import MyCard from './Card';
class todoButton extends React.Component {
  render() {
    <button title="新建" onPress={() => console.log('sss')} />;
  }
}
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  clickAddButton = () => {
    console.log('ssa');
  };
  static navigationOptions = {
    title: '待办',
    headerRight: <todoButton />,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        <Button title="新建待办" onPress={this.clickAddButton} />

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
