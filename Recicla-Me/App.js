import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Text, StyleSheet, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {

  const Stack = createStackNavigator();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para procesar el inicio de sesión
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };


  return (
    
    
   <View style={styles.contenido}>
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
        secureTextEntry={true} // Para ocultar la contraseña
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} style={styles.boton}/>
      <Button title="Registrarse" onPress={''} style={styles.boton}/>
      <Button title="Ir a Inicio (Solo Testeo)" onPress={''} style={styles.boton}/>

    </View>
s
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
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
    top: 45, // Agrega un margen de 20 unidades en la parte superior
    bottom: 80,
  },
  login: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    top: '27',
    
  },
  boton: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    top: '27',
  }
});
 