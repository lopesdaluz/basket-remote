import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/productSlice";

const store = configureStore({
  reducer: {
    products: productReducer, // Ensure this key matches your slice name
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
