import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MeTab from './MeTab';
import MainTab from './MainTab';

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="้ฆ้กต" component={MainTab} />
      <Tabs.Screen name="ๆ็" component={MeTab} />
    </Tabs.Navigator>
  );
};

export default Home;
