import React, {useState} from 'react';
import {View, Text,StatusBar, SafeAreaView} from 'react-native';

const App = () => {
  return(
    <View>
      <StatusBar hidden={true}/>
      <View style={{backgroundColor:'red',paddingVertical:30, alignItems:'center'}}><Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>jagoanhelm.com</Text></View>  
    </View>
    
    );
}

export default App;