import React, {Component} from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import {Picker} from '@react-native-picker/picker';


class App extends Component{ 

  constructor(props){
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {key:1, nome: 'margerida', valor: 35.90},
        {key:2, nome: 'carne de sol', valor: 50},
        {key:3, nome: 'calabresa', valor: 32},
        {key:4, nome: 'quatro queijos', valor: 37},
        {key:5, nome: 'banana ', valor: 37}
      ]
    };
  };


  render(){
    let pizzasItem = this.state.pizzas.map( (v, k )=> {
      return <Picker.Item key={k}  value = {k} label = {v.nome} />
    })
    return(
      <View style = {styles.container}>
      <Text style = {styles.logo}>Menu Pizza</Text>
    
      <Picker
      selectedValue={this.state.pizza}
      onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}
      >
      {pizzasItem}
      </Picker>

      <Text style = {styles.pizzas}>Voce escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
      <Text style = {styles.pizzas}>  R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)} </Text>

  



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop :20,

  },
  logo:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas: {
    marginTop: 15,
    fontSize: 28,
    textAlign: 'center'
  }





});

export default App;

