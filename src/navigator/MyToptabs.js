import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Idat from '../screens/Idat';
import Menu from '../screens/Menu';
const Tab = createMaterialTopTabNavigator();

const MyToptabs = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Menu" component={Menu} />
    <Tab.Screen name="Idat" component={Idat} />
  </Tab.Navigator>
  )
}

export default MyToptabs