import { View, Text } from 'react-native'
import React from 'react'

interface Iprop {
    h: number
}

const Spacer = (props : Iprop) => {
    const {h} = props
        return <View style={{
            height : h
        }} />
}

export default Spacer