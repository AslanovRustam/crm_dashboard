import { configureStore } from "@reduxjs/toolkit";
import companiesReducer from "./companySlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    companies: companiesReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
