import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Switch, TextInput, Button, TouchableOpacity, Image,Keyboard, Modal} from 'react-native';

export default function App(){

  const [nome, setNome] = useState('Matheus');
  const [input, setInput] = useState('');

  function alteraNome(){
    setNome(input);
    setInput('');
  }

  return(
    <View style = {styles.container}>

      <TextInput placeholder="Seu nome .." value= {input} onChangeText={(text) => setInput(text)}> 

      </TextInput>


      <TouchableOpacity style = {styles.bnt} onPress = {alteraNome}>
        <Text style = {styles.textbnt}>Alterar nome</Text>
      </TouchableOpacity>
      <Text style = {styles.texto}>{nome}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
container:{
  flex:1,
  marginTop:15
},
texto:{
  color:'#000',
  fontSize:35
},
bnt:{
  backgroundColor: '#222',
  
},
textbnt:{
  fontSize:15,
  color:'#FFF',
  textAlign:'center'

}
});