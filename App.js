import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Switch, TextInput, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from "@react-native-community/slider";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      genero: 0,  // armazena o valor selecionado no picker 
      opcoesGerero: [
        { key: 1, nome: 'Feminino' },
        { key: 2, nome: 'Masculino' },
        { key: 3, nome: 'Outros' },
      ],
      valor: 0,
      estudante: false,
    };
  };

  render() {
    return (
      <View style={styles.container}>

        
        <Text style={styles.logo}>
          Banco center
        </Text>

        <Text style= {styles.subTitulo}>A um cadastro de solucionar seus problemas!</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu nome completo:"
          onChangeText={(textoDigitado) => this.setState({ nome: textoDigitado })} // atualiza o estado com o texto digitado
          value={this.state.nome}// define o valor atual do input com o estado
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua idade:"
          onChangeText={(textoDigitadoIdade) => this.setState({ idade: textoDigitadoIdade })}
          value={this.state.idade}
        />

      <Text style={styles.text}>Qual o seu genero?</Text>
        <Picker
          selectedValue={this.state.genero}
          onValueChange={(itemValue, itemIndex) => this.setState({ genero: itemValue })}
        >
          {/* percorre o array de opções e gera um item do picker para cada uma */}
          {this.state.opcoesGerero.map((v) => (
            <Picker.Item key={v.key} value={v.key} label={v.nome} />
          ))}
        </Picker>
        <Text style = {styles.text}>Escolha seu limite:</Text>

        <Slider
        minimumValue={0}
        maximumValue={10000}
        onValueChange={(valorSelecionado) => this.setState({valor:valorSelecionado})}
        value={this.state.valor}
        minimumTrackTintColor="purple"
        maximumTrackTintColor="purple"
        thumbTintColor="purple"
        />


        <Text style = {styles.textslider}>{this.state.valor.toFixed(0)}</Text>


        <Text style = {styles.text}>Você é estudante?</Text>

        <View style = {styles.switchContainer}>
        <Switch 
        onValueChange={(acionado) => this.setState({ estudante: acionado })}
        value={this.state.estudante}
        trackColor={{ false: '#ccc', true: 'purple' }} 
        thumbColor={this.state.estudante ? '#fff' : '#888'} 
        />
        </View>
          
        <TouchableOpacity 
        style={styles.button} 
        onPress={() => alert(
        'Seus dados inseridos:\n' +
        'Nome: ' + this.state.nome + '\n' +
        'Idade: ' + this.state.idade + '\n' +
        'Gênero: ' + this.state.opcoesGerero[this.state.genero].nome + '\n' +
        'Seu limite selecionado: ' + this.state.valor.toFixed(0) + '\n' +
        'Estudante: ' + (this.state.estudante ? 'Sim' : 'Não')
  )}
>

          <Text style={styles.buttonText}>Criar sua conta</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    
  },
  input: {
    height: 40,
    borderColor: 'purple',
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
    marginBottom: 20,
    borderRadius: 5,
    
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 6,
    
  },
  textslider:{
    fontSize: 18,
    marginLeft: 10,
    marginTop: 6,
    textAlign: 'center'

  },
  button: {
    borderRadius: 8,
    margin: 10,
    backgroundColor: 'purple',
    padding: 12,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  subTitulo:{
    fontSize:18,
    textAlign: 'center',
    color: 'purple',
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',  // mantém switch à esquerda
    alignItems: 'center',
    margin: 15
  },
  switchLabel: {
    marginLeft: 10,
    fontSize: 16
  }
  

});

export default App;
