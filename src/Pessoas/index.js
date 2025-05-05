import React, {Component} from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
class Pessoas extends Component{
    render(){
      return(
        <View style = {styles.areaPessoa}>
          <Text style = {styles.textoPessoa}>{this.props.data.nome}</Text>
          <Text style = {styles.textoPessoa}>{this.props.data.idade}</Text>
          <Text style = {styles.textoPessoa}>{this.props.data.email}</Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    areaPessoa:{
        backgroundColor: '#222',
        height: 200,
        marginBottom:15
      },
      textoPessoa: {
        color: '#fff',
        fontSize: 20,
      }
});


export default Pessoas;