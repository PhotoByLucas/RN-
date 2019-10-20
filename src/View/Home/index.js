import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './Home';
import DetailsScreen from './Detaila';

const stackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    todo: DetailsScreen,
    addToDo: DetailsScreen, //新增待办
  },
  // {
  //   initialRouteName: 'Home',
  // },
);

export default stackNavigator;
