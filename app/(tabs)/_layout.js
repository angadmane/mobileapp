import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const _layout = () => {
  return (
    <Tabs screenOptions={{     
      tabBarActiveTintColor: '#138B7F',
      tabBarStyle: {
        position: 'absolute',
        borderTopColor: 'rgba(0, 0, 0, .2)',
      },
    }}>
      {/* <Tabs.Screen name="profile"  options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }} />
      <Tabs.Screen name="chats" options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }} />
    </Tabs>
    <Tabs  screenOptions={{     
      tabBarActiveTintColor: '#138B7F',
      tabBarStyle: {
        position: 'absolute',
        borderTopColor: 'rgba(0, 0, 0, .2)',
      },
    }}> */}
        <Tabs.Screen name='GPS' options={{
          title: 'GPS',
          tabBarIcon: ({ color }) => <MaterialIcons name="gps-fixed" size={28} color={color} />,
        }} />
        <Tabs.Screen name='profile' options={{
          title: 'Insurance',
          tabBarIcon: ({ color }) => <FontAwesome name="shield" size={24} color={color} />,
        }} />
         <Tabs.Screen name='about' options={{
          title: 'About',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="info" color={color} />,
        }} />
          <Tabs.Screen name='contact' options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="phone" color={color} />,
        }} />
    </Tabs>
  );
}

export default _layout