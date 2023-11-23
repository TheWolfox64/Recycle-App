import React, { useState } from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './register';
import Login from './login';
import Principal from './principal';


const ChngScreenLogin = ({ navigation }) => {
  navigation.navigate('Login');
};

const ChngScreenReg = ({ navigation }) => {
  navigation.navigate('Register');
};
export default function Home({ navigation }) {


  return (
    <View style={styles.container}>
      <Image source={require('./assets/background.png')} style={styles.background} />
      <View style={styles.overlay}>
        <Image source={require('./assets/splash.png')} style={styles.logo} />
      </View>
      <View style={styles.contenido}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.content}>¡La forma de cambiar el mundo, aprende y cuida el medio ambiente!</Text>
        <TouchableOpacity style={styles.button} onPress={() => ChngScreenLogin({ navigation })}>
          <Text>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => ChngScreenReg({ navigation })}>
          <Text>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '60%',
    height: '30%',
    alignSelf: 'center',
    position: 'absolute',
    top: 45,
  },
  contenido: {
    marginTop: 30,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 100,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 40,
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    marginBottom: 10,
  },
  content: {
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
});