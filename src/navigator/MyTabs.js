import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Idat from '../screens/Idat';
import Menu from '../screens/Menu';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Menu" component={Menu}   />
    <Tab.Screen name="Idat" component={Idat} />
  </Tab.Navigator>
  )
}

export default MyTabs