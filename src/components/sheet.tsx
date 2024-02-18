import React from "react";
import { Text, StyleSheet, Dimensions, View } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
  useAnimatedStyle,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";

const DIMENSIONS = Dimensions.get("window");
const SHEET_HEIGHT = 384;
const SHEET_OVER_DRAG = 20;

type Props = {
  onClose: () => void;
  children?: React.ReactNode;
};

function Sheet({ onClose }: Props) {
  const offset = useSharedValue(0);

  function close() {
    offset.value = 0;
    onClose();
  }

  const pen = Gesture.Pan()
    .onChange((event) => {
      const offsetDelta = event.changeY + offset.value;
      const clamp = Math.max(-SHEET_OVER_DRAG, offsetDelta);

      offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
    })
    .onFinalize(() => {
      if (offset.value < SHEET_HEIGHT / 3) {
        offset.value = withSpring(0);
      } else {
        offset.value = withTiming(SHEET_HEIGHT, {}, () => {
          runOnJS(close)();
        });
      }
    });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  return (
    <GestureDetector gesture={pen}>
      <Animated.View
        style={[styles.container, translateY]}
        entering={SlideInDown.springify().damping(15)}
        exiting={SlideOutDown.springify().damping(15)}
      >
        <View style={styles.header}>
          <View style={styles.sheetButton} />
        </View>
        <View style={styles.content}></View>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SHEET_HEIGHT,
    width: DIMENSIONS.width,
    backgroundColor: "#fff",

    position: "absolute",
    bottom: -SHEET_OVER_DRAG * 1.3,

    borderWidth: 0.5,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    overflow: "hidden",
  },
  header: {
    width: "100%",
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  sheetButton: {
    width: 62,
    height: 10,
    borderRadius: 16,
    backgroundColor: "#000000",
  },
  content: {
    flex: 1,
  },
});

export { Sheet };
