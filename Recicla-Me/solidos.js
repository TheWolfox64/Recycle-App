import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import 'react-native-gesture-handler';
import Home from './home';
import Register from './register';
import Login from './login';
import WebInorganico from './webInorganico';
import WebOrganico from './webOrganico';
import WebMadera from './webMadera';
import WebPapel from './webPapel';
import WebMetal from './webMetal';
import WebVidrio from './webVidrio';
import WebPlastico from './webPlastico';
import WebTela from './webTela';

const slides = [
  {
    key: "one",
    title: "Orgánico",
    text: "Son de origen biológico; provienen de materias vegetales, animales o comestibles y son biodegradables.",
    Image: require('./assets/icons/residuos/organico.png'),
    url: 'https://laecocosmopolita.com/2017/03/07/10-consejos-para-reducir-residuos-en-hogar/'
  },
  {
    key: "two",
    title: "Inorgánico",
    text: "Proceden de creación del humano y no pertenece a la naturaleza",
    Image: require('./assets/icons/residuos/inorganico.png'),
    url: 'https://laecocosmopolita.com/2017/03/07/10-consejos-para-reducir-residuos-en-hogar/'
  },
  {
    key: "three",
    title: "Papel",
    text: "En México se recicla 4.9 millones de toneladas de papel.",
    Image:require('./assets/icons/residuos/papel.png'),
    url: 'https://laecocosmopolita.com/2017/03/07/10-consejos-para-reducir-residuos-en-hogar/'
  },
  {
      key: "four",
      title: "Plástico",
      text: "Evita que los residuos plásticos terminen en la basura.",
      Image:require('./assets/icons/residuos//plastico.png'),
      url: 'https://laecocosmopolita.com/2017/03/07/10-consejos-para-reducir-residuos-en-hogar/'
    },
    {
      key: "five",
      title: "Metal",
      text: "Separa los metales, pueden ser utilizados para la creación de nuevas cosas",
      Image:require('./assets/icons/residuos/metal.png'),
      url: 'https://laecocosmopolita.com/2017/03/07/10-consejos-para-reducir-residuos-en-hogar/'
    },
    {
      key: "six",
      title: "Vidrio",
      text: "El vidrio puede calentarse a temperaturas altas y ser utilizado nuevamente.",
      Image:require('./assets/icons/residuos/vidrio.png'),
      url: 'https://laecocosmopolita.com/2017/03/07/10-consejos-para-reducir-residuos-en-hogar/'
    },
    {
      key: "seven",
      title: "Madera",
      text: "Al separar los residuos pomovemos a su reciclaje y reutilización.",
      Image:require('./assets/icons/residuos/madera.png'),
      url: 'https://laecocosmopolita.com/2017/03/07/10-consejos-para-reducir-residuos-en-hogar/'
    },
    {
      key: "eight",
      title: "Tela",
      text: "Reciclar ayuda a hacer un uso eficiente de los recursos naturales.",
      Image:require('./assets/icons/residuos/tela.png'),
      url: 'https://laecocosmopolita.com/2017/03/07/10-consejos-para-reducir-residuos-en-hogar/'
    }
 
];

const Drawer = createDrawerNavigator();

export default class SolidosRes extends Component {
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
              <Text>Saber más...</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <AppIntroSlider renderItem={this._renderItem} data={slides} activeDotStyle={styles.activeDot} />
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

