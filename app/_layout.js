import { View, Image } from 'react-native'
import { Stack } from 'expo-router'

import car from '../assets/car1994.png'
export default function Layout() {
    return (
        <View className="flex-1">
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            />
        </View>
    )
}