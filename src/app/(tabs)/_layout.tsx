import { colors } from "@/styles/colors";
import { MaterialIcons, Octicons, AntDesign } from "@expo/vector-icons";
import { Tabs, useFocusEffect } from "expo-router"; // Importe useFocusEffect de expo-router
import { View, Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.gray[50],
          borderTopWidth: 0,
          elevation: 0,
          paddingHorizontal: 80,
          minHeight: 90,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.purple[400],
        tabBarInactiveTintColor: colors.gray[400],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View className="bg-purple-700 p-4 rounded-xl mb-6">
              <AntDesign name="plussquareo" size={24} color={colors.white} />
            </View>
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="extract"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
