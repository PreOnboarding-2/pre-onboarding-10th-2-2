import { createSlice } from "@reduxjs/toolkit";

type InitalState = {
  selectedIndex: number;
};

const initialState: InitalState = {
  selectedIndex: 0,
};

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    up: (state, action) => {
      state.selectedIndex = state.selectedIndex + action.payload;
    },
    down: (state, action) => {
      state.selectedIndex = state.selectedIndex - action.payload;
    },
    set: (state, action) => {
      state.selectedIndex = action.payload;
    },
  },
});

export default selectedSlice;
export const { up, down, set } = selectedSlice.actions;
