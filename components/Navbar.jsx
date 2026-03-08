import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ padding: "10px 20px", backgroundColor: "#333", color: "#fff", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* اللوجو */}
        <Link 
          to="/" 
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "22px",
            textDecoration: "none",
            letterSpacing: "1px"
          }}
        >
          Frames
        </Link>

        {/* الروابط */}
        <div className="nav-links" style={{
          display: open ? "block" : "none",
          transition: "all 0.3s ease",
        }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/category" style={linkStyle}>Category</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/cart" style={linkStyle}>Cart</Link>
        </div>

        {/* زر الهامبرجر مع حركة */}
        <button 
          onClick={() => setOpen(!open)} 
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "28px",
            cursor: "pointer",
            transition: "transform 0.3s",
          }}
        >
          {open ? "✕" : "☰"} {/* هيتحول من ☰ لـ X */}
        </button>
      </div>

      <style>
        {`
          @media(min-width: 768px){
            .nav-links { display: flex !important; gap: 20px; }
            nav button { display: none; }
          }

          .nav-links a:hover { color: #ff9800; }
        `}
      </style>
    </nav>
  );
}

const linkStyle = {
  color: "#fff",
  margin: "0 10px",
  fontWeight: "500",
  textDecoration: "none",
  letterSpacing: "0.5px",
  transition: "color 0.3s",
};