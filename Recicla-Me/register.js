import React, { useState } from 'react';
import { Image, Text, StyleSheet, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './home';
import Login from './login';
import Principal from './principal';
import Register from './register';


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



export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordSame, setPasswordSame] = useState('');
  const [Nombre, setNombre] = useState('');

  const ChngScreenLogin = ({ navigation }) => {
    navigation.navigate('Login');
  };



  const auth = getAuth();

  const handleCreateAccount = () => {
    if (password === passwordSame) {
        const auth = getAuth();
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
      } else {
        Alert.alert('Las contraseñas no coinciden');
      }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/background.png')} style={styles.background} />
      <View style={styles.overlay}>
        <Image source={require('./assets/splash.png')} style={styles.logo} />
      </View>
      <View style={styles.login}>
        <Text style={styles.title}>Registro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={text => setNombre(text)}
          value={Nombre}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          onChangeText={text => setPasswordSame(text)}
          value={passwordSame}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text>Crear cuenta</Text>
        </TouchableOpacity>

        <Text style={styles.content}>Ya tienes una cuenta?</Text>
        <Text style={styles.content}>No te preocupes... Inicia sesion aqui</Text>

        <TouchableOpacity style={styles.button} onPress={() => ChngScreenLogin({ navigation })}>
          <Text>Iniciar sesion</Text>
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
  content:{
     marginBottom: 10,
  },
});