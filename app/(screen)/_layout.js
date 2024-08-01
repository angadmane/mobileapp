import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="registrationform"
        options={{headerShown: false, contentStyle: { backgroundColor: "#EFFFFF" } }}
      />
      
    </Stack>
  );
}

export default _layout