import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native';

const Counter = (stack) => {
    const [number, setNumber] = useState(0);
    const {nombre, apellido,edad} = stack.route.params.data


    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {
          stack.route.params.data &&
          <Text style={{fontSize:20, color:'#000', fontWeight: 'bold'}}>
          { nombre } { apellido } { edad } 
          </Text>
        }
      
        <Text
          style={{
            color: '#000',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          {number}
        </Text>
  
        <Button
          onPress={() => {
            setNumber(number + 1);
          }}
          title="Incrementar"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => {
            setNumber(number - 1);
          }}
          title="Decrementar"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => {
            setNumber(0);
          }}
          title="Limpiar"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
}

export default Counter