import { createSlice } from "@reduxjs/toolkit";
import { SearchInital } from "../types/storeType";

const initialState: SearchInital = {
  keyword: "",
  recommend: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    set: (state, action) => {
      state.keyword = action.payload.keyword;
      state.recommend = action.payload.recommend;
    },
    init: (state, action) => {
      state.keyword = "";
      state.recommend = [];
    },
  },
});

export default searchSlice;
export const { set, init } = searchSlice.actions;
