import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./app/src/screens/Home";
export default function App(){
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  )
}