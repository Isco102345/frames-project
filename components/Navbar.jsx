import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../src/nav.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        {/* اللوجو */}
        <Link to="/" className="logo">
          <img
            src="/images/WhatsApp Image 2026-03-11 at 5.04.42 PM.jpeg"
            alt="Frame Conic Logo"
          />
        </Link>

        {/* زر الهامبرجر */}
        <button onClick={() => setOpen(!open)} className="hamburger">
          {open ? "✕" : "☰"}
        </button>

        {/* الروابط */}
        <div className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/category">Category</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}