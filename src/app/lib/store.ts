import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import companiesReducer from "./companySlice";
import filterReducer from "./filterSlice";
import userReduser from "./userSlice";

const persistCompanyConfig = {
  key: "companies",
  storage: storage,
};
const persistUserConfig = {
  key: "user",
  storage: storage,
};

const persistedCompaniesReducer = persistReducer(
  persistCompanyConfig,
  companiesReducer
);
const persistedUserReducer = persistReducer(persistUserConfig, userReduser);

export const store = configureStore({
  reducer: {
    companies: persistedCompaniesReducer,
    user: persistedUserReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
