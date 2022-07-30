import { View, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import IMAGES from '../../utils/resources'
import { ScreenHeight, ScreenWidth } from '../../utils/helpers'
import COLORS from '../../theme/colors'
import { Button } from '@rneui/base'
import UNITS from '../../theme/units'
import { useNavigation } from '@react-navigation/native'
import constant from '../../routes/constant'

let timer: any;

const Intro = () => {

  const navigation = useNavigation();

  const flatRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const INTRO = [
    {key : 1, image : IMAGES.intro1}, 
    {key : 2, image : IMAGES.intro2}, 
    {key : 3, image : IMAGES.intro3}
  ]

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    setLocalState(Math.round(index));
  }

  const setLocalState = (index : number) => {
    timer = setTimeout(() => {
        setCurrentIndex(index)
    }, 200)
  }

  useEffect(() => {
    return () => {
        if(timer){
            clearTimeout(timer);
        }        
    }
  }, [])

  const renderItem = ({item}) => { 
    return (
  <Image 
    source={item.image}
    resizeMode={'cover'}
    resizeMethod={'resize'}
    style={styles.background}
   />
    )}


  const isFinalIndex = currentIndex === INTRO.length -1;


  const handleClick = () => {
    if(isFinalIndex) {
        navigation.reset({
            index: 0,
            routes: [
                { name: constant.login },
            ],
        })
    } else {
        flatRef.current?.scrollToOffset({
            offset : (currentIndex + 1) * ScreenWidth
        })
    }

  }

  return (
    <>
        <FlatList 
            ref={flatRef}
            pagingEnabled
            horizontal
            bounces
            onScroll={handleScroll}
            showsHorizontalScrollIndicator={false}
            data={INTRO}
            keyExtractor={(key, index) => index.toString()}
            renderItem={renderItem}
        />
        <View>
            <View 
                style={{
                    position: 'absolute',
                    bottom : 0,
                    height: 100,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems : 'center',
                    backgroundColor : COLORS.lightBg
                }}
            >
                <View style={{flexDirection:'row', paddingBottom : UNITS.padding}} >
                    {INTRO.map((item, index) => (
                        <View
                            style={{width : 20}}     
                            key={index?.toString()}>
                            <View 
                            style={{
                                backgroundColor: currentIndex == index ? COLORS.secondary : COLORS.primary,
                                width: 10,
                                height:10,
                                borderRadius: 10
                            }} />
                        </View>
                    ))}
                </View>
                <Button
                    onPress={handleClick}
                    iconRight
                    iconContainerStyle={{ paddingLeft : UNITS.minPadding}}
                    color={COLORS.secondary}
                    raised
                    radius={25}
                    icon={isFinalIndex ? undefined : { type: 'font-awesome', color : COLORS.light, name: 'arrow-right' }}
                    title={isFinalIndex ? 'GET STARTED' : 'NEXT'}
                />

            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    background : {
        height: ScreenHeight,
        width: ScreenWidth ,
    }
})

export default Intro