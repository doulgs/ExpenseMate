import { Text, View } from "react-native";

import { Header } from "@/components/header";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-50">
      <Header>
        <Header.Info />
      </Header>

      <View className="flex-1 mt-16"></View>
    </View>
  );
}
