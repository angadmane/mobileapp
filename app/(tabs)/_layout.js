import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';

const GPSScreen = () => <ScrollView><View><Text>
But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
</Text></View></ScrollView>;
const ProfileScreen = () => <View><Text>Profile Screen</Text></View>;
const AboutScreen = () => <View><Text>About Screen</Text></View>;
const ContactScreen = () => <View><Text>Contact Screen</Text></View>;
const LoginScreen = () => <View><Text>Login Screen</Text></View>;

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#138B7F',
      tabBarStyle: {
        position: 'absolute',
        borderTopColor: 'rgba(0, 0, 0, .2)',
      },
      headerShown:false
    }}
  >
    <Tab.Screen
      name="GPS"
      component={GPSScreen}
      options={{
        title: 'GPS',
        tabBarIcon: ({ color }) => <MaterialIcons name="gps-fixed" size={28} color={color} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: 'Insurance',
        tabBarIcon: ({ color }) => <FontAwesome name="shield" size={24} color={color} />,
      }}
    />
    <Tab.Screen
      name="About"
      component={AboutScreen}
      options={{
        title: 'About',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="info" color={color} />,
      }}
    />
    <Tab.Screen
      name="Contact"
      component={ContactScreen}
      options={{
        title: 'Contact',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="phone" color={color} />,
      }}
    />
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabNavigator} options={{ drawerLabel: 'Home' }} />
    <Drawer.Screen name="Login" component={LoginScreen} options={{ drawerLabel: 'Login' }} />
  </Drawer.Navigator>
);

const _layout = () =>(
  <NavigationContainer independent={true}>
    <DrawerNavigator />
  </NavigationContainer>
)

export default _layout