import React from "react";
import TitleUI from "./Title.style";
import { CommonProps } from "../../../types/common/CommonProps";

const Title = ({ children, ...props }: CommonProps) => <TitleUI {...props}>{children}</TitleUI>;

export default Title;
