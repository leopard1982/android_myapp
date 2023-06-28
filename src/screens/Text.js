import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';

const App = () => {
  return(
    <SafeAreaView>
      <View style={{padding:10}}>
        <View style={{borderRadius:5,borderColor:'grey',borderWeight:2, elevation:5, padding:10,alignItems:'center'}}>
          <Text style={{fontSize:30,fontWeight:'bold',textDecorationLine:'underline'}}>Jaket Kulit Bagus</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{textDecorationLine: 'line-through',fontStyle:'italic',padding:5,fontSize:22,fontWeight:'bold'}}>Rp.89.000,00</Text>
            <Text style={{fontSize:10,fontWeight:'bold', paddingHorizontal:4,color:'red'}}>30% OFF</Text>
            <Text style={{backgroundColor:'yellow',borderRadius:5,padding:5,fontWeight:'bold',fontSize:20}}>Rp.49.000,00</Text>
           
          </View>          
          <View style={{padding:5}}>
              <Text style={{letterSpacing:2,marginHorizontal:3,lineHeight:30}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
    );
}

export default App;