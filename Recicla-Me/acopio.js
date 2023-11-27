import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import 'react-native-gesture-handler';
import Home from './home';
import Register from './register';
import Login from './login';

const slides = [
    {
        key: "one",
        title: "Grupo Maqueda",
        text: "Cerrada flores Magón, 69 Colonia la estación, Mixquiahuala, Hgo. Tel. 7387251412",
        Image:require('./assets/map.png'),
        url: 'https://maps.app.goo.gl/2uJujwxozcFFcgSn6'
        
      },
      {
        key: "two",
        title: "Compra-Venta de metales y baterias",
        text: "Boulevard octaviano flores Mayorga, 0 Colonia Bondho, Mixquiahuala, Hgo.",
        Image:require('./assets/map.png'),
        url: 'https://www.google.com.mx/maps/search/El+Bondho+recicladora/@20.2342204,-99.2042878,15z/data=!3m1!4b1?entry=ttu'
      },
      {
        key: "three",
        title: "Recicladora",
        text: "Avenida Cuitláhuac, 0 Colonia el calvario, Mixquiahuala, Hgo.",
        Image:require('./assets/map.png'),
        url: 'https://maps.app.goo.gl/PQZGJjn9vYudut1n9'
      }
]

const Drawer = createDrawerNavigator();

export default class Acopio extends Component {
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <ImageBackground source={require('./assets/background.png')} style={styles.background} />
        <View style={styles.container}>
          <Image source={require('./assets/splash.png')} style={styles.image} />
          <View style={styles.icon}>
            <Image source={item.Image} style={styles.resImage} />
          </View>
          <View style={styles.contenidoText}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(item.url)}>
              <Text>Saber mas...</Text>
            </TouchableOpacity>
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
    width: '55%',
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