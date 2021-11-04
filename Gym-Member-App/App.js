import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ScheduleScreen from "./screens/ScheduleScreen";
import SettingScreen from "./screens/SettingScreen";
import StoreScreen from "./screens/StoreScreen";
import ChatScreen from "./screens/ChatScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name = 'Home' component = {HomeScreen}/>
      <Drawer.Screen name = 'Scheduler' component = {ScheduleScreen}/>
      <Drawer.Screen name = 'Store' component = {StoreScreen}/>
      <Drawer.Screen name = 'ChatScreen' component = {ChatScreen}/>
      <Drawer.Screen name = 'Setting' component = {SettingScreen}/>
    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name = "Login" component = {LoginScreen}/>
          <Stack.Screen name = "Register" component={RegisterScreen}/>
          <Stack.Screen name = "Root" component= {Root} options = {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

