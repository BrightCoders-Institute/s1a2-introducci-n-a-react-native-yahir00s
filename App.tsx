/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [contador, setcontador] = useState(10) 
  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center'
    }}>

      <Text style = {{textAlign: 'center',fontSize: 50}}> Hola mundo </Text>
      <Text style = {{textAlign: 'center'}}> Contador: {contador} </Text>
      
      <Button
        title='Contar'
        onPress={()=> setcontador(contador + 1 )}
      />

    </View>
  );
};

export default App;
