import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { createWrapper } from "next-redux-wrapper";

const persistConfig = {
  key: "root",
  storage,
};

// const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: {
    reducer,
  },
});

export default store;

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
