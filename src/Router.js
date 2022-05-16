import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Pages/Login Page';
import RegisterPage from './Pages/Register Page';
import ChatPage from './Pages/Chat Page';
import RoomsPage from './Pages/Rooms Page';
import FlashMessage from "react-native-flash-message";
const Stack = createNativeStackNavigator();
const App=()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} />
      <Stack.Screen name="RoomsPage" component={RoomsPage} />
      <Stack.Screen name="ChatPage" component={ChatPage} />
    </Stack.Navigator>
    <FlashMessage position="top" />
  </NavigationContainer>
  )
}
export default App;