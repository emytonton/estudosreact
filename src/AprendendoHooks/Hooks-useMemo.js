import React, {useState, useEffect, useMemo} from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Switch, TextInput, Button, TouchableOpacity, Image,Keyboard, Modal} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function App(){

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');


  //ComponentDidMout
  useEffect( () => {
    async function getStorage() {
        const nomeStorage = await AsyncStorage.getItem('nomes');
        if(nomeStorage !== null){
          setNome(nomeStorage);
        }
    }

    getStorage();
  }, []);


  //Simulando o nosso component DidUpdate
  useEffect( () => {

    async function saveStorage() {
        await AsyncStorage.setItem('nomes', nome)
    }


    saveStorage();
  }, [nome])

  function alteraNome(){
    setNome(input);
    setInput('');
  }


  const letrasNome = useMemo( () => {
    nome.length
    console.log('mudou letra');
    return nome.length;
  }, [nome]);
 

  return(
    <View style = {styles.container}>

      <TextInput placeholder="Seu nome .." value= {input} onChangeText={(text) => setInput(text)}> 

      </TextInput>


      <TouchableOpacity style = {styles.bnt} onPress = {alteraNome}>
        <Text style = {styles.textbnt}>Alterar nome</Text>
      </TouchableOpacity>
      <Text style = {styles.texto}>{nome}</Text>


      <Text style = {styles.texto}>{letrasNome}</Text>
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