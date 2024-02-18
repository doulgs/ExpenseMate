import { colors } from "@/styles/colors";
import { ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <ActivityIndicator
      className="flex-auto bg-gray-800 items-center justify-center"
      size={32}
      color={colors.purple[300]}
    />
  );
}
