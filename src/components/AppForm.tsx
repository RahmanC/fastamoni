import { Formik } from "formik";
import React, { FC } from "react";
import { AppFormProps } from "type";

export const AppForm: FC<AppFormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};
