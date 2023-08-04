import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import productReducer from "./features/productSlice";
import cartReducer from "./features/cartSlice";
export const store = configureStore({
  reducer: {
    counterReducer,
    productReducer,
    cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
