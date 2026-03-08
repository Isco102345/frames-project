import React from "react";

export default function About() {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{
        textAlign: "center",
        marginBottom: "30px",
        fontSize: "32px",
        color: "#333"
      }}>
        About Us
      </h1>

      <section style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#555" }}>
          We are three young creators working on designing and producing <strong>unique Frames</strong>, each with its own story.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "24px", color: "#2196f3", marginBottom: "10px" }}>Sports Frames</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#555" }}>
          Images of famous athletes or iconic sports moments. Each image includes a <strong>QR code</strong> linking to a story or background behind it.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "24px", color: "#2196f3", marginBottom: "10px" }}>Cars Frames</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#555" }}>
          Images of classic and modern car models. Each image comes with a <strong>QR code</strong> revealing the story or inspiration behind the design.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "24px", color: "#2196f3", marginBottom: "10px" }}>Dentist Frames</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#555" }}>
          Designs tailored for dentists. Each frame features wisdom, stories, or real-life moments related to dental practice.
        </p>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2 style={{ fontSize: "24px", color: "#2196f3", marginBottom: "10px" }}>The Idea</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>
          Every Frame is more than just a picture—it’s an <strong>interactive visual experience</strong>. The QR code adds a storytelling element, giving users a deeper connection to each product.
        </p>
      </section>

      <style>
        {`
          @media (max-width: 768px){
            h1 { font-size: 28px; }
            h2 { font-size: 20px; }
            p { font-size: 15px; }
            div { padding: 15px; }
          }
        `}
      </style>
    </div>
  );
}