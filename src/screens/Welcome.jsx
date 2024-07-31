import React from 'react'
import { View, Text, StatusBar, Image, ImageBackground, StyleSheet, Dimensions} from 'react-native'
import bg1 from '../../assets/bg1.png'
import logo from '../../assets/logo.png'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ButtonPrimary } from '../components/Buttons'


export default function Welcome() {

    const width = Dimensions.get('screen').width
    const height = Dimensions.get('screen').height

    return (
        <SafeAreaProvider>
            <ImageBackground style={{ width: width, height: height }} source={bg1}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <StatusBar style="dark" />
                    <Image source={logo} style={styles.image}></Image>
                    <Text className="text-5xl font-bold" style={styles.text}>Bienvenido</Text>
                    <ButtonPrimary to="/Home">Comenzar</ButtonPrimary>
                </View>
            </ImageBackground>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300
    },
    text: {
        color: '#42279f'
    }
})