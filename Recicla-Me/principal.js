import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';

import Home from './home';
import Register from './register';
import Login from './login';
import Nosotros from './nosotros';
import Tips from './tips';
import Solidos from './solidos';
import Acopio from './acopio';

const slides = [
  {
    key: "one",
    title: "Residuos Solidos",
    text: "Aprende sobre los diferentes tipos de residuos solidos que hay en México.",
    Image: require('./assets/icons/principal/residuos.png'),
    screen: 'Solidos',
  },
  {
    key: "two",
    title: "Nosotros",
    text: "Conoce más acerca de nuestra historia, misión y visión",
    Image: require('./assets/icons/principal/nosotros.png'),
    screen: 'Nosotros',
  },
  {
    key: "three",
    title: "Tips",
    text: "Conoce nuevas formas de reciclar, reutilizar y reducir los desechos solidos.",
    Image: require('./assets/icons/principal/tips.png'),
    screen: 'Tips',
  },
  {
    key: "four",
    title: "Centros de acopio",
    text: "Localiza los centros de acopio más cercanos a ti, Cuidemos el ambiente.",
    Image: require('./assets/icons/principal/ubicacion.png'),
    screen: 'Acopio',
  }
];

const Principal = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };

  const _renderItem = ({ item }) => {
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
            <TouchableOpacity style={styles.button} onPress={() => navigateToScreen(item.screen)}>
              <Text>Saber Más...</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      activeDotStyle={styles.activeDot}
    />
  );
};

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

export default Principal;