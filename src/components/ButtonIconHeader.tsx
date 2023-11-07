import React, { memo, useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "configs";

import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonIconHeaderProps } from "type";
import Text from "elements/Text";

const ButtonIconHeader = memo(
  ({
    onPress,
    style,
    marginLeft,
    marginRight,
    marginBottom,
    borderColor,
    backgroundColor,
    icon,
    label,
  }: ButtonIconHeaderProps) => {
    const { goBack } = useNavigation();
    const _onPress = useCallback(() => {
      if (onPress) {
        onPress();
      } else {
        goBack();
      }
    }, [onPress]);

    return (
      <TouchableOpacity
        style={[
          styles.container,
          style,
          {
            marginLeft: marginLeft ? marginLeft : 0,
            marginBottom: marginBottom ? marginBottom : 0,
            marginRight: marginRight ? marginRight : 0,
            borderColor: borderColor || Colors.Border,
            backgroundColor: backgroundColor,
          },
        ]}
        onPress={_onPress}
      >
        {label && (
          <Text marginRight={5} color={Colors.Purple} size={14}>
            {label}
          </Text>
        )}
        <FontAwesome5 name={icon} size={24} color={Colors.Purple} />
      </TouchableOpacity>
    );
  }
);

export default ButtonIconHeader;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    flexDirection: "row",
    padding: 7,
  },
});
