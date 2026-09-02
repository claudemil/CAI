import { Colors, Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: Colors.light.activeTabBarBackground,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Learn",
          tabBarIcon: ({ color }) => (
            <Ionicons size={18} name="home" color={color} />
          ),
          tabBarLabelStyle: {
            fontFamily: Fonts.sans,
            color: Colors.light.textPrimary,
            fontSize: 10,
            fontWeight: "bold",
          },
        }}
      />
      <Tabs.Screen
        name="visualize"
        options={{
          title: "Visualize",
          tabBarIcon: ({ color }) => (
            <Ionicons size={18} name="stats-chart-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons size={18} name="person-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
