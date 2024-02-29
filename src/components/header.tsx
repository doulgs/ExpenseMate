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
    <View className=" w-full bg-gray-800 items-center justify-center mt-8">
      <View className="flex-row ">
        <Avatar
          source={{ uri: "https://github.com/doulgs.png" }}
          size="small"
        />

        <View className="flex-1 justify-center ml-4">
          <Text className="text-md font-heading text-white">Olá, Douglas</Text>
          <Text className="text-2xl font-body text-white">
            Douglas Domiciano
          </Text>
        </View>
      </View>

      <View className="w-full">
        <HeaderInfo />
        <View className="flex-row">
          <HeaderCard />
          <HeaderCard />
        </View>
      </View>
    </View>
  );
}

function HeaderInfo() {
  return (
    <View className="gap-4 mt-8 mb-4">
      <View className="flex-row justify-between">
        <Text className="text-md font-body text-white">
          resumo de Fevereiro
        </Text>
        <Text className="text-md font-body text-white">26 Fev. 2024</Text>
      </View>
      <View
        className="w-full h-24 bg-gray-700 rounded-3xl flex-row items-center justify-between "
        style={{ elevation: 3 }}
      ></View>
    </View>
  );
}
function HeaderCard() {
  return (
    <View className="gap-4">
      <View
        className="w-full h-24 bg-gray-700 rounded-3xl flex-row items-center justify-between "
        style={{ elevation: 3 }}
      ></View>
    </View>
  );
}

Header.Info = HeaderInfo;

export { Header };
