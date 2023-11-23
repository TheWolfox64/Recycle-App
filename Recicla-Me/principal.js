import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import Home from './home';
import Register from './register';
import Login from './login';

const slides = [
  {
    key: "one",
    title: "Nosotros",
    text: "En el año 2023, un grupo de jóvenes preocupados por la protección del medio ambiente y conscientes de la",
    
  },
  {
    key: "two",
    title: "Misión",
    text: "Promover la cultura del reciclaje y el manejo responsable de los residuos sólidos",
    
  },
  {
    key: "three",
    title: "Visión",
    text: "Un futuro en el que la población de Hidalgo haya adoptado el reciclaje y el.",
  }
];

export default class Principal extends Component {
  _renderItem = ({ item }) => {
    return (
      
        
        <View style={styles.slide}>
          <ImageBackground source={require('./assets/background.png')} style={styles.background} />
          <View style={styles.container}>
          <Image source={require('./assets/splash.png')} style={styles.image} />
          <View style={styles.contenidoText}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>
        </View>
    );
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        activeDotStyle={styles.activeDot}
      />
    );
  }
}

const styles = StyleSheet.create({
  contenidoText:{
    width: '70%',
    height: '30%',
    backgroundColor: '#AEF2DA',
    borderRadius: 10,
    marginTop: 50,
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
    height: '30%',
    alignSelf: 'center',
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
});