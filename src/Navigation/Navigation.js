import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen'
import MedicalRecord from '../screens/Records/MedicalRecord';
import Splash from '../screens/splash/Splash';
import Appointments from '../screens/Appointment/Appointments';
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native';
import EvilIcons from "react-native-vector-icons/EvilIcons"

const stack = createNativeStackNavigator();

const Navigation = ({navigation}) => {
  // const navigation = useNavigation()

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='medicalrecord'>
        <stack.Screen name="home" component={HomeScreen} options={{
          headerShown: false
        }} />
        <stack.Screen name="medicalrecord" component={MedicalRecord} options={{ title: "MedicalRecord",
        headerLeft:()=>(
                <TouchableOpacity onPress={()=>navigation.goBack()} >
                  <Ionicons name="arrow-back" size ={24} color="black" style={{marginRight: "25%"}}></Ionicons>
                </TouchableOpacity>
              ) 
        ,
        headerRight: () => (
            <TouchableOpacity>
              <AntDesign name="search1" size ={24} color="black" ></AntDesign>
            </TouchableOpacity>
          )  
        }}
        />
        <stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
        <stack.Screen name="appointments" component={Appointments} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation


