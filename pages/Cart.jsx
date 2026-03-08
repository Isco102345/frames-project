import React, { useState } from "react";

export default function Cart({ cartItems, removeFromCart }) {
  const [toast, setToast] = useState(null);

  const numbers = [
    "201100331323",
    "201111111111",
    "201222222222"
  ];

  const handleRemove = (id, name) => {
    removeFromCart(id);
    showToast(`${name} Deleted Successfully`);
  };

  const handleBuy = (product) => {
    const random = numbers[Math.floor(Math.random() * numbers.length)];
    const message = `Hello I want to buy ${product.name}`;
    window.open(`https://wa.me/${random}?text=${encodeURIComponent(message)}`);
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Your Cart</h1>

      {toast && (
        <div style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          backgroundColor: "#4caf50",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}>
          {toast}
        </div>
      )}

      {cartItems.length === 0 ? (
        <p>No products yet</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div 
              key={item.id} 
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "15px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px"
              }}
            >
              <img src={item.image} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "5px" }} />
              <span style={{ flex: 1, marginLeft: "10px" }}>{item.name} x {item.quantity}</span>
              <span style={{ width: "60px" }}>${item.price * item.quantity}</span>
              <div style={{ display: "flex", gap: "5px" }}>
                <button 
                  onClick={() => handleRemove(item.id, item.name)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#f44336",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold"
                  }}
                >
                  Remove
                </button>
                <button 
                  onClick={() => handleBuy(item)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#2196f3",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold"
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
}