import { Text, View } from "react-native";
import { Avatar } from "./avatar";
import { ReactNode } from "react";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import { formatCurrency } from "@/utils/functions/format-currency";
import { colors } from "@/styles/colors";

type HeaderProps = {
  children?: ReactNode;
};

function Header({ children }: HeaderProps) {
  return (
    <View className="h-56 w-full bg-purple-800 items-center justify-center">
      <View className="w-96 flex-row ">
        <View className="flex-1 justify-center">
          <Text className="text-2xl font-heading text-white">Olá, Douglas</Text>
          <Text className="text-md font-body text-white">
            Mantenha suas contas em dia
          </Text>
        </View>
        <Avatar source={{ uri: "https://github.com/doulgs.png" }} />
      </View>
      {children}
    </View>
  );
}

function HeaderInfo() {
  return (
    <View
      className="w-96 h-24 bg-gray-700 rounded-3xl absolute bottom-0 flex-row items-center justify-between px-4"
      style={{ bottom: -44, elevation: 3 }}
    ></View>
  );
}

Header.Info = HeaderInfo;

export { Header };
