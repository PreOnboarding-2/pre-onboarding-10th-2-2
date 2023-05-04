import { ChangeEvent } from "react"
import { Data } from "../cache/CacheObject";

export type InputProps = {
  type: string,
  placeholder?: string,
  value?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  onFocus?: () => void,
  onBlur?: () => void
};

type InputAndRecProps = {
  focusHandler: () => void,
  data: Data[],
  debouncedHandler: (e: ChangeEvent<HTMLInputElement>) => void,
  inputText: string,
  isError: boolean,
  isFocus: boolean
};

export interface InputWrapperProps {
  inputProps: InputAndRecProps
};