import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://media.istockphoto.com/vectors/ram-vector-id1003202434'}}
        style={styles.logo} />

      <Text style={styles.insts}>
        Press the button below to select an image on your phone!
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => alert('You have not selected an image yet')}>
        <Text style={styles.buttonText}> Pick Image </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFFE0"
  },

  button: {
    backgroundColor: "#778899",
    padding: 20,
    borderRadius: 5
  },

  insts: {
    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10,
  },

  logo: {
    width: 310,
    height: 300,
    marginBotton: 20
  },

  buttonText: {
    fontSize: 20,
    color: "blue"
  }

});