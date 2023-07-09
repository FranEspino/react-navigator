import React from 'react'
import { Button} from 'react-native'

const CustomButton = (number, onPress) => {



  return (

      <Button
          onPress={onPress }
          title="Mi boton"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

    
  )
}

export default CustomButton