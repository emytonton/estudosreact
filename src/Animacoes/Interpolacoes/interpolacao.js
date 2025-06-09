import React, {useRef, useEffect} from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

export default function App(){

  const larguraAnimada = useRef(new Animated.Value(0)).current;
  const alturaAnimada = useRef(new Animated.Value(50)).current;
  

  useEffect( () => {
   
      Animated.timing(larguraAnimada,{
        toValue: 100,
        duration:2000,
        useNativeDriver: false
    
  }).start();


  }, []);

let porcentagemLargunto = larguraAnimada.interpolate({
  inputRange:[0,100],//entrada, vai de quanto a quanto
  outputRange:['0%', '100%'] // vai sair de zero ate cem % com base na nossa entrada
   
})
  return(
    <View style = {styles.container}>

      <Animated.View style ={{
        width: porcentagemLargunto,
        height: alturaAnimada,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        
      }}>
        
      

    </Animated.View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})