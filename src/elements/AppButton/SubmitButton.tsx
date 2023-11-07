import React from "react";
import { useFormikContext } from "formik";
import AppButton from ".";
import { ButtonProps } from "type/input";

const SubmitButton = ({ title, style, styleText, disabled }: ButtonProps) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      style={style}
      styleText={styleText}
      onPress={handleSubmit}
      disabled={disabled}
    />
  );
};

export default SubmitButton;
