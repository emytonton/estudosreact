import React, {useRef, useEffect} from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
export default function App(){

  const BotaoAnimado = Animatable.createAnimatableComponent(TouchableOpacity);

  return(
    <View style = {styles.container}>

    <Animatable.Text 
    style = {styles.text}
    animation= "bounce"//tipo da animacao
    iterationCount={Infinity} // quantas vezes repetir
    duration={5000}
    >A
    </Animatable.Text>


    <BotaoAnimado style = {styles.bnt} animation="slideInDown">

    <Text style ={{color: '#FFF', textAlign: 'center'}}>Ola</Text>
    </BotaoAnimado>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize:25
  },
  bnt:{
    width: '70%',
    height: 30,
    backgroundColor: '#121212',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 25
  }
})