import React from "react";
import ContainerUI from "./Container.style";
import { CommonProps } from "../../../types/common/CommonProps";

const Container = ({ children, ...props }: CommonProps) => {
  return <ContainerUI {...props}>{children}</ContainerUI>;
};

export default Container;
