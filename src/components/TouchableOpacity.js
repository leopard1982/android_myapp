import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const Taop = () => {
	let [jumlahklik,jumlahklik_set] = useState(0);

	function beli() {
		jumlahklik_set(++jumlahklik);
	}

	return (
		<View>
			<TouchableOpacity style={{alignItems:'center',}} 
				onPress={() => beli()}>
				
				<Text style={{elevation:10,
					paddingHorizontal:10,
					paddingVertical:20,
					borderRadius:5,
					textAlign:'center',
					color:'black',
					backgroundColor:'rgba(255,255,0,1)',
					fontWeight:'bold',
					marginTop:10,
					}}>
					<Image source={require('./images/chart.png')} style={{width:20,height:20}} /> Klik Me!
				</Text>
			</TouchableOpacity>		
			<Text style={{fontSize:30,fontWeight:'bold',textAlign:'center'}}>
				Jumlah Klik: {jumlahklik}
			</Text>	
		</View>

		);
}

export default Taop;