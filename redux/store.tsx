import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import productReducer from "./features/productSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
    productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
