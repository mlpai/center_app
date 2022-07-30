import { View, Text, StyleSheet, StyleProp, ViewProps, Image, Keyboard } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import IMAGES from '../../utils/resources'

type Iprop = {
    children: any,
    style? : StyleProp<ViewProps>,
    bgEnabled?: boolean
}

const Container = (props:Iprop) => {
    const { children, style, bgEnabled } = props
  return (
    <SafeAreaProvider>
      <Image source={bgEnabled ? IMAGES.bg : {}} resizeMode={'cover'} style={styles.full} />
      <View style={[styles.container, style]} onStartShouldSetResponder={() => true} onResponderGrant={() => Keyboard.dismiss()} >
        {children} 
      </View>
    </SafeAreaProvider>
  )
}

export default Container

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    full : {
      position : 'absolute',
      height: '100%',
      width: '100%',
      opacity : 0.5,
      zIndex: -1,
    }
  })