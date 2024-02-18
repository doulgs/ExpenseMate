import { View, Platform } from "react-native";
import { Tabs } from "expo-router";

import { colors } from "@/styles/colors";
import { AntDesign } from "@expo/vector-icons";
import { Sheet } from "@/components/sheet";
import { useMoviments } from "@/context/authContext";

export default function TabLayout() {
  const { sheetIsOpen, toggleSheet } = useMoviments();
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.gray[50],
            borderTopWidth: 0,
            elevation: 0,
            paddingHorizontal: 60,
            minHeight: Platform.OS === "ios" ? 120 : 90,
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
              <View className="bg-purple-700 p-4 rounded-xl mb-8">
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

      {sheetIsOpen && <Sheet onClose={toggleSheet} />}
    </>
  );
}
