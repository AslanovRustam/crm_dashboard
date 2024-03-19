import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    removeUserName: (state, action: PayloadAction) => {
      state.name = "";
    },
  },
});

export const { addUserName, removeUserName } = userSlice.actions;

export default userSlice.reducer;
