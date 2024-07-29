import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import car from '../../../assets/car1994.png'
// import SettingsOutline from './Icons'

export default function Header() {

    const width = Dimensions.get('screen').width;
    return (
        <View className="flex justify-center items-center" style={{width: width, height: 140, backgroundColor: 'blue' }}>
            <Image source={car} style={{width: 200, height: 100, marginTop: 40}}  />
        </View>
    )
}
