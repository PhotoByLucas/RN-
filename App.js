import React from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

// 页面引入
import HomeScreen from './src/View/Home/index';
import DetailsScreen from './src/View/Detail';

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  // {
  //   initialRouteName: 'Home',
  // },
);

export default createAppContainer(AppNavigator);
