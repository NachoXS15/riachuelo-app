import { Tabs } from "expo-router"

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: 'blue' }
                
            }}
        >
            <Tabs.Screen
                name="Home"
                options={{
                    title: "Home",

                }}
            />
        </Tabs>
    )
}