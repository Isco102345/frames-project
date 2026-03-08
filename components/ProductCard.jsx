import React, { useState } from "react";

export default function ProductCard({ product, addToCart }) {
  const [toast, setToast] = useState(null);

  const numbers = [
    "201100331323",
  ];

  const buyNow = () => {
    const random = numbers[Math.floor(Math.random() * numbers.length)];
    const message = `Hello I want to buy ${product.name}`;
    window.open(`https://wa.me/${random}?text=${encodeURIComponent(message)}`);
  };

  const handleAddToCart = () => {
    addToCart(product);
    showToast(`${product.name} Added to Cart Successfully`, product.image);
  };

  const showToast = (message, image) => {
    setToast({ message, image });
    setTimeout(() => setToast(null), 2000); 
  };

  return (
    <div className="product-card" style={{ border: "1px solid #ccc", padding: "10px", width: "200px", position: "relative" }}>
      {toast && (
        <div style={{
          position: "absolute",
          top: "-70px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#4caf50",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          zIndex: 100
        }}>
          <img src={toast.image} alt="product" style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "5px" }} />
          <span>{toast.message}</span>
        </div>
      )}

      <img src={product.image} alt={product.name} style={{ width: "100%" }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <button 
          onClick={handleAddToCart}
          style={{
            padding: "7px 12px",
            backgroundColor: "#ff9800",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            flex: 1,
            marginRight: "5px",
            transition: "0.3s",
          }}
          onMouseEnter={e => e.target.style.backgroundColor = "#fb8c00"}
          onMouseLeave={e => e.target.style.backgroundColor = "#ff9800"}
        >
          Add to Cart
        </button>
        <button 
          onClick={buyNow} 
          style={{
            padding: "7px 12px",
            backgroundColor: "#2196f3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            flex: 1,
            transition: "0.3s",
          }}
          onMouseEnter={e => e.target.style.backgroundColor = "#1976d2"}
          onMouseLeave={e => e.target.style.backgroundColor = "#2196f3"}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}