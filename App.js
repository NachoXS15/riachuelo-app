import { StatusBar } from "expo-status-bar";
import Main from "./src/components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App(){
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Main />
    </SafeAreaProvider>
  )
}