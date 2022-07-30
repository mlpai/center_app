import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AUTH_SCREEN, NON_AUTH_SCREEN } from './screens';

const Stack = createNativeStackNavigator();

export const AuthState = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false }} >
        {AUTH_SCREEN?.map(stack => <Stack.Screen 
          key={stack.name} 
          name={stack.name}
          component={stack.component} /> )}
    </Stack.Navigator>
  )
}

export const NonAuthState = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false }}>
        {NON_AUTH_SCREEN?.map(stack => <Stack.Screen key={stack.name} name={stack.name} component={stack.component} /> )}
    </Stack.Navigator>
  )
}
