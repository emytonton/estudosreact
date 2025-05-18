import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Switch, TextInput, Button, TouchableOpacity, Image,Keyboard, Modal} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from "@react-native-community/slider";
import AsyncStorage from "@react-native-async-storage/async-storage";

class App extends Component {
  render() {
    return (

          <View style ={{backgroundColor:'#292929', width: '100%', height:350, borderRadius:15}}>
            <Text style = {{paddingTop:15,color:'#FFF', fontSize:28}}>Seja bem vindo!</Text>
            <Button title="sair" onPress={this.props.fechar} />
          </View>
     
    );
  }
}



export default App;
