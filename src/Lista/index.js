import React, {Component} from "react";
import {View,Text,Image,TouchableOpacity, StyleSheet} from 'react-native';

class Lista extends Component{

    constructor(props){
        super(props);
        this.state ={
            feed: this.props.data
        }
    }




    render(){
        return(
            <View style = {styles.areaFeed}>
            <View style = {styles.viewPerfil}>
                <Image 
                source={{uri: this.state.feed.imgperfil}}
                style = {styles.fotoPerfil}
                />
                <Text style = {styles.nomeusuario}>{this.state.feed.nome}</Text>
            </View>

            <Image
            resizeMode="cover"
            style = {styles.fotoPublicacao}
            source={{uri: this.state.feed.imgPublicacao}}

            />

            <View style = {styles.areaBtn}>
                <TouchableOpacity>
                    <Image
                    source = {require('../img/like.png')}
                    style ={styles.iconelike}
                    />
                </TouchableOpacity>


                <TouchableOpacity style ={styles.btnSend}>
                    <Image
                    source = {require('../img/send.png')}
                    style ={styles.iconelike}
                    />
                </TouchableOpacity>

            </View>


            <View style= {styles.viewRodape}>
                <Text  style = {styles.nomeRodape}>
                    {this.state.feed.nome}
                </Text>

                <Text style = {styles.descRodape}>
                    {this.state.feed.descricao}
                </Text>
            </View>



            </View>
        );
    }
}


const styles = StyleSheet.create({
areaFeed: {

},
nomeusuario:{
    fontSize:22,
    textAlign: 'left',
    color: '#000000',
},
fotoPerfil:{
    width:50,
    height:50,
    borderRadius: 25,
},
viewPerfil:{
    flexDirection: 'row',
    flex:1,
    alignItems: 'center',
    padding: 8
},
fotoPublicacao:{
    flex:1,
    height:400,
    alignItems:'center'
},
areaBtn:{
    flexDirection: 'row',
    padding:5
},
iconelike:{
    width: 33,
    height:33
},
btnSend:{
    paddingLeft:10
},
viewRodape:{
    flexDirection: 'row',
    alignItems: 'center'
},
descRodape:{
    paddingLeft:5,
    fontSize: 15,
    color: '#000'
},
nomeRodape:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft:5
}

});


export default Lista;