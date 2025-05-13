import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Switch, TextInput, Button, TouchableOpacity, Image,Keyboard} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from "@react-native-community/slider";
import AsyncStorage from "@react-native-async-storage/async-storage";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      input: ' ',
      nome: ' '

    };


    this.gravaNome = this.gravaNome.bind(this);

  }



  //ComponentDidMout - Quando um componente é montado em tela
  async componentDidMount(){
    await AsyncStorage.getItem('nome').then((value) => {
      this.setState({nome:value})
    })


  }


  // toda vez que um state é atualizado, fazer algo

  async componentDidUpdate(_,prevState){
    const nome = this.state.nome
    if(prevState !== nome){
      await AsyncStorage.setItem('nome', nome)
    }
  }




  gravaNome(){
    this.setState({
      nome: this.state.input
    });
    alert('Salvss');
   
    
  }  
  

  render() {
    return (

      <View style={styles.container}>


      <View style = {styles.view}>
      <TextInput
      style = {styles.input}
      value = {this.state.input}
      onChangeText={(text => this.setState({input: text}))}
      underlineColorAndroid={"transparent"}
      />


      <TouchableOpacity onPress={this.gravaNome}>
        <Text style = {styles.botao}>+</Text>
      </TouchableOpacity>
      </View>
       
        <Text style = { styles.nome}>{this.state.nome}</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
},
view:{
  flexDirection: 'row',
  alignItems: 'center',

},
input:{
width: 350,
height:40,
borderColor: '#000',
borderWidth:1,
padding :10,
margin:10
},
botao: {
  backgroundColor: '#666',
  height:40,
  padding:10,
  marginLeft:4
},
nome:{
  fontSize: 30,
  textAlign:'center',
  marginTop:15
}


});

export default App;
