import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import bg1 from '../../assets/bg1.png'
import logo from '../../assets/logo.png'
export default function Main() {
  return (
    <View className="w-full h-full" style={styles.container}>
      <ImageBackground source={bg1} resizeMode='cover' style={styles.bg}>
        <StatusBar style="dark" />
        <Image source={logo} style={styles.image}/>
        <Text style={styles.text}>Bienvenido</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 300
  },
  text: {
    fontFamily: 'Times New Roman',
    fontSize: 40
  }
});
