import { Tabs } from "expo-router"
import { BasketballIcon, HomeIcon, PersonIcon } from "../../src/components/Icons"

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: 'blue', height: 70 },
            }}
        >
            <Tabs.Screen
                name="Home"
                options={{
                    title: "Home",
                    tabBarIcon: ({color}) => <HomeIcon color={color} />

                }}
            />
            <Tabs.Screen
                name="Train"
                options={{
                    title: "Entrenar",
                    tabBarIcon: ({color}) => <BasketballIcon color={color} />

                }}
            />
            <Tabs.Screen
                name="Profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({color}) => <PersonIcon color={color} />
                }}
            />
        </Tabs>
    )
}