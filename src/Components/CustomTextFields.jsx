import { TextField } from "@mui/material";
import React from "react";

export const CustomTextFields = ({
  type,
  value,
  onChange,
  name,
  register,
  placeholder,
}) => {
  return (
    <TextField
      variant="outlined"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      inputRef={register}
    />
  );
};
