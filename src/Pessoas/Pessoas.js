import React, {Component} from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import Pessoas from "./src/Pessoas";


class App extends Component{ 

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id: 1, nome: 'Matheus', idade: 50, email: 'matheus@matheus.com'},
        {id: 2,nome: 'Emilly', idade: 23, email: 'emilly@emilly.com'},
        {id: 3,nome: 'Joao', idade: 21, email: 'joao@joao.com'},
        {id: 4,nome: 'Mel', idade: 31, email: 'mel@mel.com'},
      ]
    }
  }
  render(){
    return(
      <View style = {styles.container}>
      <FlatList
      data={this.state.feed}
      renderItem={ ({item}) => <Pessoas data={item}/>}
      
      
      />

    
  



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },





});

export default App;

