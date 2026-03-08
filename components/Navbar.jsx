import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ padding: "10px 20px", backgroundColor: "#333", color: "#fff", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
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

        {/* زر الهامبرجر */}
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
          {open ? "✕" : "☰"}
        </button>

        {/* الروابط */}
        <div className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/category" style={linkStyle}>Category</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/cart" style={linkStyle}>Cart</Link>
        </div>
      </div>

      <style>
        {`
          .nav-links a:hover { color: #ff9800; }

          /* شاشات صغيرة */
          @media (max-width: 767px) {
            .nav-links {
              display: none;
              flex-direction: column;
              gap: 10px;
              position: absolute;
              top: 100%; /* تحت الهامبرجر */
              right: 0;
              background-color: #333;
              padding: 10px 15px;
              border-radius: 5px;
              box-shadow: 0 2px 6px rgba(0,0,0,0.3);
              min-width: 120px; /* عرض مناسب */
            }
            .nav-links.open {
              display: flex;
            }
            .nav-links a {
              text-align: right;
              padding: 5px 0;
            }
          }

          /* شاشات كبيرة */
          @media (min-width: 768px) {
            .nav-links { display: flex !important; gap: 20px; position: static; min-width: auto; }
            nav button { display: none; }
          }
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