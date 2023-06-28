import React, {useState} from 'react';
import {View, StatusBar, Text, Image} from 'react-native';

const Header = (props) => {
  return (
    <View style={{alignItems:'center', backgroundColor:'rgba(0,0,255,0.5)',marginBottom:10}} >
      <StatusBar backgroundColor='rgba(0,0,255,0.5)' hidden={true}/>
      <View style={{flexDirection:'row'}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Image source={require('./images/lookcute.png')} style={{width:120,height:87}} resizeMode= 'stretch'/>
        </View>

        <View style={{flexDirection:'column',flex:1}}>
          <Text style={{paddingVertical:30, 
            fontWeight:'bold',
            elevation:10,
            paddingHorizontal:10, 
            fontSize:15, 
            backgroundColor:'rgba(0,0,255,0.8)',
            color:'white',
            letterSpacing:1,
            textAlign:'center'
            }}>look@cute</Text>
          <Text style={{textAlign:'center',
            fontSize:15,
            padding:5,
            fontWeight:'bold',
            color:'blue',
            backgroundColor:'rgba(255,255,255,0.8)',
            marginBottom:5,
            elevation:10
            }}>{props.apps}</Text>  
        </View>
        
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Image source={require('./images/lookcute.png')} style={{width:120,height:87}} />
        </View>
          
      </View>
      
    </View>
    );
}

export default Header;