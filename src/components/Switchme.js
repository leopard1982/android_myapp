import React, {useState} from 'react';
import {View, Text, Switch, TouchableOpacity} from 'react-native';

const Swtc = () => {
	let [lampu, setLampu] = useState(false)

	return (
		<Switch value={false} onValueChange={()=>setLampu(!lampu)}>
		</Switch>
		);
}

export default Swtc;