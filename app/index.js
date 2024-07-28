import { SafeAreaProvider } from "react-native-safe-area-context"
import Welcome from "../src/screens/Welcome"

export default function Index() {
    return (
        <SafeAreaProvider>
            <Welcome />
        </SafeAreaProvider>
    )
}