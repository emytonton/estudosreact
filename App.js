
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from '@react-native-vector-icons/evil-icons';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feather Icons Example</Text>

      <Feather name="home" size={40} color="#4F8EF7" />
      <Feather name="user" size={40} color="#4CAF50" />
      <Feather name="settings" size={40} color="#FF9800" />
      <Feather name="heart" size={40} color="#E91E63" />
      <Icon 
      name="phone"
      size={45}
      color = "#000"
      />

      <TouchableOpacity style={styles.button}>
        <Feather name="arrow-right" size={20} color="#fff" />
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#4F8EF7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
