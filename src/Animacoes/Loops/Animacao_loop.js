import React, {useRef, useEffect} from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

export default function App(){

  const larguraAnimada = useRef(new Animated.Value(150)).current;
  const alturaAnimada = useRef(new Animated.Value(50)).current;
  

  useEffect( () => {
    Animated.loop(
      Animated.timing(larguraAnimada,{
        toValue: 300,
        duration:2000,
        useNativeDriver: false
      })
    ).start();


  }, []);


  return(
    <View style = {styles.container}>

      <Animated.View style ={{
        width: larguraAnimada,
        height: alturaAnimada,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        
      }}>
        <Text style = {{ textAlign: 'center', fontSize: 22,color: '#FFF' }}>Carregando...</Text>
      

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