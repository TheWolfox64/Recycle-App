import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Text, StyleSheet, View, Button, TextInput } from 'react-native';

export default function App() {


  return (
   <View style={styles.contenido}>
          <Image source={require('./assets/background.png')} style={styles.background} />
   

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  
});
