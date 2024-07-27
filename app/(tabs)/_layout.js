import { Tabs } from "expo-router";
import { Home } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Index',
          tabBarIcon: ({ color }) => <Home size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}