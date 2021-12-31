import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MeTab from './MeTab';
import MainTab from './MainTab';

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="首页" component={MainTab} />
      <Tabs.Screen name="我的" component={MeTab} />
    </Tabs.Navigator>
  );
};

export default Home;
