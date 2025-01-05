import {
  TouchableOpacity,
  Text,
  TextProps,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";

import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="h-14 max-h-14 bg-green-base rounded-xl items-center justify-center flex-row gap-4"
      style={style}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator className="text-gray-100" size={"small"} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
function Title({ children }: TextProps) {
  return (
    <Text className="text-gray-100 font-semiBold text-base">{children}</Text>
  );
}

type IconProps = {
  icon: React.ComponentType<TablerIconProps>;
};

function Icon({ icon: Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };
