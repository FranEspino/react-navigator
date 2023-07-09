import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from '../screens/Menu';
import Idat from '../screens/Idat';
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
   <Drawer.Navigator>
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Idat" component={Idat} />
    </Drawer.Navigator>
  )
}

export default MyDrawer