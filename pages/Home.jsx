import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home({ addToCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Our Frames</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <style>
        {`
          .products-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }

          @media(min-width: 600px){
            .products-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media(min-width: 900px){
            .products-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media(min-width: 1200px){
            .products-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        `}
      </style>
    </div>
  );
}