import React, {useState, userEffect} from 'react';

import {View, Text, InputText} from 'react-native';

const App = () => {
  return (
      <View style={{
        flex:1,
        backgroundColor:'white'
        }}>
        <View style={{
          backgroundColor:"rgba(255,255,0,0.3)",
          flex:1,
          marginTop:30,
          paddingVertical:10,
          alignItems:'center',
          }}>
          <Text style={{fontSize:30,fontStyle:'italic'}}>Hello World!</Text>
        </View>
        <View style={{
          backgroundColor:"rgba(255,255,255,1)",
          flex:6,
          alignItems:'center',
          }}>
          <View style={{
            backgroundColor:'white',
            width:'90%',
            borderRadius:5,
            margin:10,
            alignItems:'center',
            elevation:10,
            }}>
              <Text style={{
                margin:10,
                color:'#000'
              }}>Hallo Guys!</Text>
            </View>
          <View style={{
            backgroundColor:'yellow',
            width:'90%',
            borderRadius:5,
            marginVertical:10,
            paddingHorizontal:30,
            paddingVertical:10,
            marginHorizontal:10,
            elevation:10,
            }}>
              <Text style={{color:'black',textAlign:'center'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
          </View>
          <View style={{
            marginVertical:10,
            flexDirection:'row',
            width:'100%',
            paddingHorizontal:10,
            backgroundColor:'red',
            }}>
            <Text style={{marginHorizontal:5,color:'white'}}>Menu1</Text>
            <Text style={{marginHorizontal:5,color:'white'}}>Menu2</Text>
            <Text style={{marginHorizontal:5,color:'white'}}>Menu3</Text>
            <Text style={{marginHorizontal:5,color:'white'}}>Menu4</Text>
            <Text style={{marginHorizontal:5,color:'white'}}>Menu5</Text>
            <Text style={{marginHorizontal:5,color:'white'}}>Menu6</Text>
            <Text style={{marginHorizontal:5,color:'white'}}>Menu7</Text>
          </View>
          <View style={{
            marginVertical:10,
            backgroundColor:'orange',
            width:'95%',
            borderRadius:5,
            paddingHorizontal:5,
            flexDirection:'row'
          }}>
            <View style={{
              flex:1,
              alignItems:'center'
              }}>
              <Text style={{color:'white'}}>hallo1</Text>              
            </View>
            <View style={{
              flex:1,
              alignItems:'center'
              }}>
              <Text style={{color:'white'}}>hallo2</Text>              
            </View>            
            <View style={{
              flex:1,
              alignItems:'center'
              }}>
              <Text style={{color:'white'}}>hallo3</Text>              
            </View>
          </View>
        <View style={{
            marginVertical:10,
            backgroundColor:'orange',
            width:'95%',
            borderRadius:5,
            paddingHorizontal:5,
            flexDirection:'row'
          }}>
            <View style={{
              flex:1,
              alignItems:'center'
              }}>
              <Text style={{color:'white'}}>hallo1</Text>              
            </View>
            <View style={{
              flex:1,
              alignItems:'center'
              }}>
              <Text style={{color:'white'}}>hallo2</Text>              
            </View>            
            <View style={{
              flex:1,
              alignItems:'center'
              }}>
              <Text style={{color:'white'}}>hallo3</Text>              
            </View>
          </View>
        </View>

      </View>

    );
}

export default App;