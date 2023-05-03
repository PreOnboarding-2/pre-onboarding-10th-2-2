import { Recommend } from "../types/utilsType";

const EXPIRE_TIME = 7200000;

export const setKeyword = (keyword: string, recommend: Recommend) => {
  const obj = {
    value: recommend,
    expire: Date.now() + EXPIRE_TIME,
  };
  localStorage.setItem(keyword, JSON.stringify(obj));
};

export const getKeyword = (keyword: string) => {
  const objString = localStorage.getItem(keyword);
  if (!objString) {
    return false;
  }

  const obj = JSON.parse(objString);
  if (Date.now() > obj.expire) {
    localStorage.removeItem(keyword);
    return false;
  }

  return obj.value;
};

export const removeKeyword = (keyword: string) => {
  localStorage.removeItem(keyword);
};
