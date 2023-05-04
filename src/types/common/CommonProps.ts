import React from "react";

export type CommonProps = {
  children?: React.ReactNode
};

export interface FocusProps extends CommonProps {
  isFocus: boolean;
};

export type IconProps = {
  $isbtn: boolean
};
