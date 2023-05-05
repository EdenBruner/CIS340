import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://freebiesupply.com/logos/csu-rams-logo/"
  };

  return (
    <View style={styles.container}>
      
      <Image
        style={styles.localCSULogo}
        source={require('./assets/localCSULogo.jpg')}
      />

      <Image
        style={styles.urlCSULogo}
        source={{
          uri: "https://media.istockphoto.com/vectors/ram-vector-id1003202434"
        }}
      />

      <Image 
        style={styles.stretchLogo}
        source={csuLogo}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCSULogo: {
    width: 55,
    height: 65,
  },

  urlCSULogo: {
    width: 50,
    height: 50
  },

  stretchLogo: {
    
    height: 200,
    resizeMode: 'center'
  }

});
