import React from 'react'
import { View, Text, ImageBackground, Image, Pressable, Dimensions } from 'react-native'
import car from '../../assets/car1994.png'
import { Link } from 'expo-router'
import { SettingsOutline } from './icons'

export default function Header() {

    const width = Dimensions.get('screen').width;
    const heigth = Dimensions.get('screen').height;

    return (
        <View className="flex justify-center items-center" style={{width: width, height: 100, backgroundColor: 'blue' }}>
            <Image source={car} style={{width: 200, height: 100}}  />

        </View>
    )
}
