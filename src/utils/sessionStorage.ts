import { Recommend } from "../types/utilsType";

export const setKeyword = (keyword: string, recommend: Recommend) => {
  sessionStorage.setItem(keyword, JSON.stringify(recommend));
};

export const getKeyword = (keyword: string) => {
  return JSON.parse(sessionStorage.getItem(keyword)!);
};

export const removeKeyword = (keyword: string) => {
  sessionStorage.removeItem(keyword);
};
