import React from "react";
import { ConditionProps } from "type";

const ConditionalRender = ({ children, isVisible }: ConditionProps) => {
  if (!isVisible) return null;

  return children;
};

export default ConditionalRender;
