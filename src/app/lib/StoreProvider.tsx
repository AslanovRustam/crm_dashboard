"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { store } from "./store";

persistStore(store);
export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
