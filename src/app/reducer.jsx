import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
const initialState = {
  loading: false,
  counter: 0,
};

const reducer = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    setCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { startLoading, stopLoading, setCounter } = reducer.actions;

export default reducer.reducer;
