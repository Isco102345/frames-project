import React, { useState } from "react";

export default function Cart({ cartItems, removeFromCart }) {
  const [toast, setToast] = useState(null);

  const numbers = ["201100331323", "201111111111", "201222222222"];

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

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="content">
        <h1 className="title">Your Cart</h1>

        {toast && <div className="toast">{toast}</div>}

        {cartItems.length === 0 ? (
          <p>No products yet</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.images[0]} alt={item.name} className="cart-img" />
                <span className="cart-name">
                  {item.name} x {item.quantity}
                </span>
                <span className="cart-price">${item.price * item.quantity}</span>
                <div className="cart-buttons">
                  <button
                    onClick={() => handleRemove(item.id, item.name)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => handleBuy(item)}
                    className="buy-btn"
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

      <style>{`
        .cart-page {
          width: 100vw;
          min-height: 100vh;
          background: radial-gradient(circle at 20% 30%, #2c2c2c, #111);
          position: relative;
          overflow: hidden;
        }

        .cart-page::before {
          content: "";
          position: absolute;
          width: 200%;
          height: 200%;
          background-image: radial-gradient(white 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.15;
          animation: stars 120s linear infinite;
          z-index: 0;
        }

        @keyframes stars {
          from { transform: translateY(0); }
          to { transform: translateY(-1000px); }
        }

        .content {
          position: relative;
          z-index: 1;
          padding: 40px;
          max-width: 900px;
          margin: 0 auto;
          color: #fff;
          font-family: 'Bebas Neue', sans-serif;
        }

        .title {
          text-align: center;
          font-size: 70px;
          letter-spacing: 6px;
          margin-bottom: 50px;
          background: linear-gradient(90deg, #fff, #999, #fff);
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 4s linear infinite;
        }

        @keyframes shine {
          0% { background-position: 0%; }
          100% { background-position: 200%; }
        }

        .cart-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
          border-bottom: 1px solid #ccc;
          padding-bottom: 10px;
        }

        .cart-img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 5px;
        }

        .cart-name {
          flex: 1;
          margin-left: 10px;
        }

        .cart-price {
          width: 60px;
        }

        .cart-buttons {
          display: flex;
          gap: 5px;
        }

        .remove-btn {
          padding: 5px 10px;
          background-color: #f44336;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }

        .buy-btn {
          padding: 5px 10px;
          background-color: #2196f3;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }

        .toast {
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: #4caf50;
          color: #fff;
          padding: 10px 20px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          z-index: 1000;
        }

        @media (max-width: 768px){
          .title { font-size: 32px; }
          .content { padding: 15px; }
          .cart-img { width: 50px; height: 50px; }
        }
      `}</style>
    </div>
  );
}