import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useAppSelector } from '../hooks/redux'
import { AuthState, NonAuthState } from './Stacks'

const Navigation = () => {

    const authState = useAppSelector(state => state.authState);

  return (
    <NavigationContainer>
        {authState.bearerToken ? <AuthState /> : <NonAuthState />}
    </NavigationContainer>
  )
}

export default Navigation