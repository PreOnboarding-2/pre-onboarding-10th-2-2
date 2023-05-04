import React, { forwardRef } from "react";
import InputUI from "./Input.style";
import { InputProps } from "../../../types/input/InputProps";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <InputUI {...props} ref={ref} />;
});

export default Input;
