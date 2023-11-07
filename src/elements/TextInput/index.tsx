import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "configs";
import Text from "elements/Text";
import { InputProps } from "type/input";

export default ({
  value,
  placeholder,
  onChangeText,
  onSubmitEditing,
  onEndEditing,
  onSelectionChange,
  isShowIcon,
  icon,
  iconStyle,
  secureTextEntry,
  style,
  borderColor,
  backgroundColor = Colors.White,
  iconPress,
  autoFocus,
  onFocus,
  onBlur,
  color,
  ...props
}: InputProps) => {
  let lineHeight;
  if (props.multiline) {
    lineHeight = 24;
  }

  return (
    <View
      style={[
        styles.container,
        style,
        {
          borderColor: Colors.Border,
          backgroundColor: Colors.InputBackground,
        },
        props.multiline && styles.multi,
      ]}
    >
      {props.editable ? (
        <TextInput
          numberOfLines={1}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          onEndEditing={onEndEditing}
          onSelectionChange={onSelectionChange}
          style={[
            styles.textInput,
            {
              lineHeight: lineHeight,
              color: Colors.InputDark,
            },
          ]}
          secureTextEntry={secureTextEntry}
          editable={props.editable}
          placeholderTextColor={Colors.Placeholder}
          autoFocus={autoFocus}
          keyboardType={props.keyboardType}
          {...props}
        />
      ) : (
        <Text size={15} lineHeight={24} style={{ flex: 1, fontWeight: "600" }}>
          {value}
        </Text>
      )}
      {isShowIcon && !!icon && (
        <TouchableOpacity
          style={[styles.iconView, iconStyle]}
          onPress={iconPress}
          disabled={!iconPress}
        >
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 48,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    minWidth: "100%",
  },
  iconView: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  multi: {
    paddingBottom: 11,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    height: "100%",
    color: Colors.InputDark,
  },
});
