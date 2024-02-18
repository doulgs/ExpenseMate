import { GestureHandlerRootView } from "react-native-gesture-handler";
import "@/styles/global.css";

import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";

import Loading from "../components/loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Slot />
    </GestureHandlerRootView>
  );
}
