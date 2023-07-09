import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import Welcome from '../screens/Welcome';
import MyDrawer from './MyDrawer';
import MyTabs from './MyTabs';
import MyToptabs from './MyToptabs';

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
    <StatusBar backgroundColor="#424242" barStyle="light-content" />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#212121',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          cardStyle: {
            backgroundColor: 'white',
          },
        }}>
             <Stack.Screen  options={{headerShown: false}} 
              name="Welcome" 
              component={Welcome} />

             <Stack.Screen  options={{headerShown: false}} 
              name="MyDrawer" 
              component={MyDrawer} />

              <Stack.Screen  options={{headerShown: false}} 
              name="MyTabs" 
              component={MyTabs} />

            <Stack.Screen  options={{headerShown: false}} 
              name="MyToptabs" 
              component={MyToptabs} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
  )
}

export default MyStack