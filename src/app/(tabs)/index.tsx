import { Text, View } from "react-native";

import { Header } from "@/components/header";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-800 p-6">
      <Header></Header>

      <View className="flex-1 mt-16"></View>
    </View>
  );
}
