import clsx from "clsx";
import { Image, ImageProps } from "react-native";

type AvatarProps = ImageProps & {
  size?: "small" | "medium";
};

export function Avatar({ size = "medium", ...rest }: AvatarProps) {
  return (
    <Image
      className={clsx("w-16 h-16 rounded-lg", {
        "w-10 h-10": size === "small",
      })}
      {...rest}
    />
  );
}
