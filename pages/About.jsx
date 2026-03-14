import React from "react";

export default function About() {
  return (
    <div className="about-page">
      <div className="content">
        <h1 className="title">About Us</h1>

        <section>
          <p>
            We are three young creators working on designing and producing <strong>unique Frames</strong>, each with its own story.
          </p>
        </section>

        <section>
          <h2>Sports Frames</h2>
          <p>
            Images of famous athletes or iconic sports moments. Each image includes a <strong>QR code</strong> linking to a story or background behind it.
          </p>
        </section>

        <section>
          <h2>Cars Frames</h2>
          <p>
            Images of classic and modern car models. Each image comes with a <strong>QR code</strong> revealing the story or inspiration behind the design.
          </p>
        </section>

        <section>
          <h2>Dentist Frames</h2>
          <p>
            Designs tailored for dentists. Each frame features wisdom, stories, or real-life moments related to dental practice.
          </p>
        </section>

        <section>
          <h2>The Idea</h2>
          <p>
            Every Frame is more than just a picture—it’s an <strong>interactive visual experience</strong>. The QR code adds a storytelling element, giving users a deeper connection to each product.
          </p>
        </section>
      </div>

      <style>{`
        .about-page {
          width: 100vw;
          min-height: 100vh;
          background: radial-gradient(circle at 20% 30%, #2c2c2c, #111);
          position: relative;
          overflow: hidden;
        }

        .about-page::before {
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

        section {
          margin-bottom: 20px;
        }

        section h2 {
          font-size: 24px;
          color: #2196f3;
          margin-bottom: 10px;
        }

        section p {
          font-size: 16px;
          line-height: 1.6;
        }

        @media (max-width: 768px){
          .title { font-size: 32px; }
          section h2 { font-size: 20px; }
          section p { font-size: 15px; }
          .content { padding: 15px; }
        }
      `}</style>
    </div>
  );
}