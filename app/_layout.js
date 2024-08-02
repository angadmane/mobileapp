import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Header } from 'react-native/Libraries/NewAppScreen'

const _layout = () => {
  const Drawer = createDrawerNavigator();
  function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
      </View>
    );
  }
  
  function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications Screen</Text>
      </View>
    );
  }
  
  function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
  return (
    <Stack>
        <Stack.Screen name='index' options={{contentStyle:{backgroundColor:'#EFFFFF'}}} />
        <Stack.Screen name='(tabs)' options={{headerShown:false}} />
        
        <NavigationContainer independent={true}> 
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="Feed"
        component={Feed}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{ drawerLabel: 'Updates' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
    </Drawer.Navigator>
    </NavigationContainer>
    </Stack>
  )
}

export default _layout