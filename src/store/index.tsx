import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import selectedSlice from "./selectedSlice";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    selected: selectedSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
