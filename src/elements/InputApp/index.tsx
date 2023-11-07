import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import TextInput from "elements/TextInput";
import { Colors } from "configs";
import { InputAppProps } from "type/input";

const InputApp = memo(
  ({
    value,
    placeholder,
    onChangeText,
    isShowIcon,
    icon,
    secureTextEntry,
    style,
    borderColor = Colors.Border,
    iconPress,
    autoFocus,
    multiline,
    editable = true,
    styleView,
    title,
    colorTitle,
    marginTop,
    onPress,
    keyboardType,
    onBlur,
  }: InputAppProps) => {
    return (
      <TouchableOpacity
        style={[styleView, { marginTop: marginTop }]}
        onPress={onPress}
        disabled={!onPress}
        activeOpacity={0.7}
      >
        <Text type="H6" color={colorTitle} style={{ fontWeight: "500" }}>
          {title}
        </Text>
        <TextInput
          onBlur={onBlur}
          keyboardType={keyboardType}
          {...{
            value,
            placeholder,
            onChangeText,
            isShowIcon,
            icon,
            secureTextEntry,
            borderColor,
            iconPress,
            autoFocus,
            multiline,
            editable,
          }}
          style={{ marginTop: 4, ...style }}
        />
      </TouchableOpacity>
    );
  }
);

export default InputApp;
