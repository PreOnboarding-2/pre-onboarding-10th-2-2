import { Dispatch, SetStateAction } from "react";

export interface searchItem {
  id: number;
  name: string;
}

export interface isVisible {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}
