import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Header } from 'react-native/Libraries/NewAppScreen'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{contentStyle:{backgroundColor:'#EFFFFF'}}} />
        <Stack.Screen name='(tabs)' options={{headerShown:false}} />
    </Stack>
  )
}

export default _layout