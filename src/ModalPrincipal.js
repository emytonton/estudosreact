import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Switch, TextInput, Button, TouchableOpacity, Image,Keyboard, Modal} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from "@react-native-community/slider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalFile from './src/Modal/ModalFile'
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
    };

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);

   

  }


  entrar(){
    this.setState({modalVisible: true});
  }

  sair(visible){
    this.setState({modalVisible: visible});
  }



 
  render() {
    return (

      <View style={styles.container}>
        <Button title="Entrar" onPress = {this.entrar} />

        <Modal animationType="slide" visible={this.state.modalVisible}>
         <ModalFile fechar ={ () => this.sair(false)} />
        </Modal>


    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
},



});

export default App;
