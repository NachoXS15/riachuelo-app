import React from 'react'
import { Dimensions, ImageBackground} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import bg1 from '../../assets/bg1.png'

const width = Dimensions.get('screen').width;
const heigth = Dimensions.get('screen').height;
export default function Home() {
    return (
        <SafeAreaProvider>
            <ImageBackground source={bg1} style={{width: width, height: heigth}}>
                <StatusBar style='light' />
                <Header />
            </ImageBackground>
        </SafeAreaProvider>
    )
}
