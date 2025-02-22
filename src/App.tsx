import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../src/productSlice";
import type { AppDispatch } from "./store";

const App = () => {
  const dispatch = useDispatch<AppDispatch>(); // Add type for dispatch

  useEffect(() => {
    dispatch(fetchProducts()); // Now TypeScript knows it's a thunk action
  }, [dispatch]);

  return <div>Welcome to the Basket Remote App</div>;
};

export default App;
