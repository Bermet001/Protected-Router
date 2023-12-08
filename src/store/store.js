import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mobileStoreSlice } from "./slices/mobileStore-slice";
import { signInSlice } from "./slices/sign-in-slice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

const rootReducer = combineReducers({
  [signInSlice.name]: signInSlice.reducer,
  [mobileStoreSlice.name]: mobileStoreSlice.reducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;
export const persistor = persistStore(store);
