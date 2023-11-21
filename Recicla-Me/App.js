import React from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './home';
import Register from './register';
import Login from './login';
import Principal from './principal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Principal' component={Principal}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}