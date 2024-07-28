import React from 'react'
import { View, Text, ImageBackground, Image, Pressable } from 'react-native'
import car from '../../assets/car1194.png'
import { Link } from 'expo-router'
import { SettingsOutline } from './icons'
export default function Header() {
  return (
    <View className="flex justify-center items-center">
        <Image source={car} width={70} />
        <Link href="/" asChild>
            <Image source={<SettingsOutline />} width={70} />
        </Link>
    </View>
  )
}
