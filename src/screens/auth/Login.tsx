import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Button, Image, Input } from '@rneui/base'
import COLORS from '../../theme/colors'
import { ScreenWidth } from '../../utils/helpers'
import UNITS from '../../theme/units'
import IMAGES from '../../utils/resources'
import Spacer from '../../components/Spacer'
import globalStyles from '../../theme/globalStyles'
import Container from '../../components/Container'

const Login = () => {

  return (
    <Container bgEnabled >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container} >
        <View style={[{
          backgroundColor  : COLORS.light,
          padding : UNITS.padding,
          borderRadius : 10,
        }, globalStyles.shadow]} >
        <View style={styles.center} >
          <Image 
            source={IMAGES.logo}
            resizeMode={'contain'} 
            style={{
              height: 100,
              width: 100,
            }}
          />
        </View>

        <Spacer h={50} />

        <Input 
          leftIcon={{ 
            type: 'font-awesome', 
            color: COLORS.primary , 
            name: 'envelope' 
          }} 
          placeholder='Email Address'  />
        
        <Input 
          leftIcon={{ 
            type: 'font-awesome', 
            color: COLORS.primary , 
            name: 'key' 
          }} 
          placeholder='Password'  />

          <Button 
            title={'Login'} 
            buttonStyle={{
              backgroundColor : COLORS.secondary
            }}  />
        </View>
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width : ScreenWidth * 0.88,
  },
  center : {
    alignItems : 'center',
  }
});

export default Login