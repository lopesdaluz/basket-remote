import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";
import { RootState } from "./store";
import "./App.css";
import type { AppDispatch } from "./store";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Basket Remote App is working!</h1>
      <h2>Product List</h2>
      <ul>
        {products && products.length > 0 ? (
          products.map((product) => <li key={product.id}>{product.title}</li>)
        ) : (
          <p>No products available</p>
        )}
      </ul>
    </div>
  );
};

export default App;
