import React from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppRegistry } from 'react-native';

import Home from './home';
import Register from './register';
import Login from './login';
import Principal from './principal';
import Nosotros from './nosotros';
import Tips from './tips';
import Solidos from './solidos';
import Acopio from './acopio';
import WebInorganico from './webInorganico';
import WebOrganico from './webOrganico';
import WebMadera from './webMadera';
import WebPapel from './webPapel';
import WebMetal from './webMetal';
import WebVidrio from './webVidrio';
import WebPlastico from './webPlastico';
import WebTela from './webTela';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

AppRegistry.registerComponent('MyApp', () => App);

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
    
        <Drawer.Screen name="Login" component={Login}  options={{headerShown: false, drawerLabel: () => false } }/>
        <Drawer.Screen name="Home" component={Home}  options={{headerShown: false,  drawerLabel: () => false}} />
        <Drawer.Screen name="Register" component={Register} options={{headerShown: false,  drawerLabel: () => false}}/>
        <Drawer.Screen name="Principal" component={Principal} />
        <Drawer.Screen name="Nosotros" component={Nosotros} />
        <Drawer.Screen name="Tips" component={Tips} />
        <Drawer.Screen name="Solidos" component={Solidos} />
        <Drawer.Screen name="Acopio" component={Acopio} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;