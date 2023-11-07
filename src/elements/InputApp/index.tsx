import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import TextInput from "elements/TextInput";
import { Colors } from "configs";
import { InputAppProps } from "type/input";
import { FormikValues, useFormikContext } from "formik";
import ErrorMessage from "components/ErrorMessage";

const InputApp = memo(
  ({
    name,
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
    const { setFieldTouched, setFieldValue, touched, errors, values } =
      useFormikContext<FormikValues>();

    const handleTextChange = (text: any) => {
      setFieldValue(name, text);
    };

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
          onBlur={() => setFieldTouched(name)}
          keyboardType={keyboardType}
          onChangeText={(text) => handleTextChange(text)}
          value={values[name]}
          {...{
            placeholder,
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
        <ErrorMessage visible={touched[name]} error={errors[name]} />
      </TouchableOpacity>
    );
  }
);

export default InputApp;
