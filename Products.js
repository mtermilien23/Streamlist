import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ addToCart }) => {
  const sampleProducts = [
    { id: 1, title: "Inception", price: 12.99 },
    { id: 2, title: "Interstellar", price: 14.99 },
    { id: 3, title: "The Matrix", price: 9.99 },
  ];

  return (
    <div className="products">
      {sampleProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
