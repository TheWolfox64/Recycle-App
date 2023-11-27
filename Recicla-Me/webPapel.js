import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import 'react-native-gesture-handler';
import Home from './home';
import Register from './register';
import Login from './login';



const Drawer = createDrawerNavigator();

export default class WebPapel extends Component {
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <ImageBackground source={require('./assets/background.png')} style={styles.background} />
        <View style={styles.container}>
      <WebView
        source={{ uri: 'https://laecocosmopolita.com/2017/03/07/10-consejos-para-reducir-residuos-en-hogar/' }}
        style={styles.webview}
      />
    </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  contenidoText: {
    width: '70%',
    height: '30%',
    backgroundColor: '#AEF2DA',
    borderRadius: 10,
    marginTop: 100,
    position: 'relative',
    alignContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  slide: {
    flex: 1,
  },
  image: {
    width: '60%',
    height: '25%',
    alignSelf: 'center',
    position: 'relative',
    top: 50,
  },
  title: {
    paddingTop: 25,
    paddingBottom: 10,
    fontSize: 23,
    fontWeight: "bold",
    color: "#21465b",
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
    color: "#b5b5b5",
    fontSize: 15,
    paddingHorizontal: 30,
  },
  activeDot: {
    backgroundColor: "#21465b",
    width: 30,
  },
  logo: {
    width: '60%',
    height: '30%',
    alignSelf: 'center',
    position: 'absolute',
    top: 45,
  },
  resImage: {
    flex: 1,
    width: '50%',
    height: '100%',
    alignSelf: 'center',
    position: 'absolute',
   top: 45,
  },
  icon: {
    
    top: 45,
    width: '65%',
    height: '20%',
    marginBottom: 30,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 40,
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    marginBottom: 10,
    top: 20,
    margin: '10%',
  },
});