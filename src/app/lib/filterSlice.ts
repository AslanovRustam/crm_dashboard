import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",

  initialState: "",
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
