import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import MccQuery from '../screens/MccQuery';

const StackNav = createStackNavigator();

const MainStack = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="Home" component={Home} />
      <StackNav.Screen name="MccQuery" component={MccQuery} />
    </StackNav.Navigator>
  );
};

export default MainStack;
