import React, {useState} from 'react';
import {View,TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MyInput = () => {
	var [username,setUsername]=useState('');
	var [password,setPassword]=useState('');

	function simpan() {
		console.log(username + " " + password)
	}

	return(
		<View style={{marginHorizontal:20,padding:5,borderRadius:5,borderColor:'grey',borderWidth:2}}>
			<View style={{flexDirection:'row', marginTop:10}}>
				<Text style={style.textBiasa}>User name: </Text>
				<TextInput style={style.textInputStyle} 
					onChangeText={(text)=>setUsername(text)}
					placeholder = {"username/email"}
					placeholderTextColor = {'grey'}
					 />
			</View>
			<View style={{flexDirection:'row',marginTop:10}}>
				<Text style={style.textBiasa}>Password: </Text>
				<TextInput style={style.textInputStyle}
					onChangeText={(text)=>setPassword(text)}
					placeholder = {"password"}
					placeholderTextColor = {'grey'}
					secureTextEntry={true}
					/>
			</View>	
			<View>
				<TouchableOpacity style={{alignItems:'center',marginVertical:10}} onPress={()=>simpan()}>
					<Text style={{padding:5,backgroundColor:'blue',color:'white',elevation:5,borderRadius:5,fontWeight:'bold',width:'25%',textAlign:'center'}}>Login</Text>
				</TouchableOpacity>	
			</View>
		</View>
		
		);
}

const style = StyleSheet.create({
	textInputStyle: {
		fontSize:20,
		flex:2,
		borderRadius:5,
		padding:5,
		backgroundColor:'rgba(0,0,0,0.2)'
	},
	textBiasa : {
		fontSize:20,
		flex:1
	}
});

export default MyInput;