import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import "./global.css"
// Import screens
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

import Login from './screens/Login';
import Forgot from './screens/Forgot';

import SingUp from './screens/SingUp';



// Type for stack navigation params
type RootStackParamList = {
  Home: undefined;
  Detail: undefined;

  Login:undefined;
  Forgot:undefined;
  SingUp:undefined;
  
};

const Stack = createStackNavigator<RootStackParamList>();

function  App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} /> */}

         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Forgot" component={Forgot} />
         <Stack.Screen name="SingUp" component={SingUp} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;


import "./global.css"
// import { View, Text } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text className='text-red-600  text-center mt-80'>App</Text>
//     </View>
//   )
// }

// export default App
