import React from 'react'
import {View,Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen'
import MedicalRecord from '../screens/Records/MedicalRecord';
import Splash from '../screens/splash/Splash';
import Appointments from '../screens/Appointment/Appointments';

const stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <stack.Navigator initialRouteName='splash'>
            <stack.Screen name = "home" component = {HomeScreen} options ={{headerShown: false}}/>
            <stack.Screen name = "medicalrecord" component = {MedicalRecord} options ={{headerShown: false}}/>
            <stack.Screen name = "splash" component = {Splash} options ={{headerShown: false}}/>
            <stack.Screen name = "appointments" component = {Appointments} options ={{headerShown: false}}/>
        </stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation