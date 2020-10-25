import React from 'react';

import { Text, } from 'react-native';
import Counters from './view/counters';
import Config from './view/config';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Index() {
  const Tab = createBottomTabNavigator();
  const activeTintLabelColor = '#3FC500';
  const inactiveTintLabelColor = '#808080';
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Counters"
        tabBarOptions={{
          activeTintColor: activeTintLabelColor,
          inactiveTintColor: inactiveTintLabelColor,
          style: { height: 60 }
        }}
      >
        <Tab.Screen
          name="Counters"
          component={Counters}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: 15, color: focused ? activeTintLabelColor : inactiveTintLabelColor }}>
                Contador
              </Text>
            ),
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="card-text-outline" color={color} size={30} />
            ),
          }} />
        <Tab.Screen
          name="Settings"
          component={Config}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: 15, color: focused ? activeTintLabelColor : inactiveTintLabelColor }}>
                Configurações
              </Text>
            ),
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="settings" color={color} size={30} />
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

