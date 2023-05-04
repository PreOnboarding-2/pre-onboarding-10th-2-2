import { Data } from "../cache/CacheObject"
import { CommonProps, FocusProps } from "../common/CommonProps";

export type RecommendProps = {
  searchList: Data[]
};

export type InputTextType = {
  inputText: string
};

export interface RecommendComponentProps extends RecommendProps, FocusProps, InputTextType {
  isError: boolean
}

export type RecommendItemProps = CommonProps & InputTextType;

export type RecommendListProps = RecommendProps & InputTextType;
