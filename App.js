import React, {useState} from 'react';
import {View, StatusBar, Text, Switch, StyleSheet, TextInput, ScrollView, Image} from 'react-native';

import Header from './src/components/Header';
import Taop from './src/components/TouchableOpacity';
import MyInput from './src/components/Inputan';
import Test1 from './src/components/test';

const App = () => {
  let [saklar, setSaklar]=useState(false)
  return (
      
      <View style={{flex:1}}>
          <Header apps="Point of Sales"/>  
      
          <ScrollView>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
              <Text style={{paddingTop:15}}>Bahasa Indonesia: </Text>
              <Switch value={saklar} onValueChange={() => setSaklar(!saklar)} />
            </View>
            <Taop />
            <MyInput />
            <MyInput />
            <MyInput />
            <MyInput />
            <MyInput />
            <Test1 />
          </ScrollView>          
          <View>
            <Text style={style.textFooter}>by: leopard, inc - 2023</Text>
            <Text style={{fontWeight:"bold"}}>Hallo</Text>
          </View>
      </View>
    );
}

const style = StyleSheet.create({
  textFooter: {
    fontSize:20,
    backgroundColor:'rgba(0,0,255,1)',
    marginTop:10,
    fontWeight:'bold',
    textAlign:'center',
    padding:5,
    color:'white'
  }
});

export default App;