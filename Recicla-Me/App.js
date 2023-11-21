import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Text, StyleSheet, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Register from './register';
import { useNavigation } from 'expo-router';

const firebaseConfig = {
  apiKey: "AIzaSyBTEniI4rlOs8N4FdvBuNcIjDQUlXQKAgs",
  authDomain: "recicla-meapp.firebaseapp.com",
  databaseURL: "https://recicla-meapp-default-rtdb.firebaseio.com",
  projectId: "recicla-meapp",
  storageBucket: "recicla-meapp.appspot.com",
  messagingSenderId: "589354948948",
  appId: "1:589354948948:web:1c5023ce5a9f9ded7e10c1",
  measurementId: "G-QKC3BTZHPS"
};

initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const auth = getAuth();

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Cuenta Creada');
        const user = userCredential.user;
        console.log(user);
        Alert.alert('Cuenta creada!');
      })
      .catch(error => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Inicio de Sesión Exitoso');
        const user = userCredential.user;
        console.log(user);
        Alert.alert('Inicio de sesión exitoso!');
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/background.png')} style={styles.background} />
      <View style={styles.overlay}>
        <Image source={require('./assets/splash.png')} style={styles.logo} />
      </View>
      <View style={styles.login}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
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
  login: {
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
});