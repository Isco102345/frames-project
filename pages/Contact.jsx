import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="content">
        <h1 className="title">Contact Us</h1>

        <section>
          <p>
            Email: <a href="mailto:miseesmall30@gmail.com">miseesmall30@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:01100331323">01100331323</a>
          </p>
          <p>
            Phone: <a href="tel:01141983196">01141983196</a>
          </p>
          <p>
            Email: <a href="mailto:Seifoody4@gmail.com">Seifoody4@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:01112963622">01112963622</a>
          </p>
        </section>
      </div>

      <style>{`
        .contact-page {
          width: 100vw;
          min-height: 100vh;
          background: radial-gradient(circle at 20% 30%, #2c2c2c, #111);
          position: relative;
          overflow: hidden;
        }

        .contact-page::before {
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

        section p {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        section a {
          color: #2196f3;
          text-decoration: none;
          transition: color 0.3s;
        }

        section a:hover {
          color: #fff;
        }

        @media (max-width: 768px){
          .title { font-size: 32px; }
          section p { font-size: 15px; }
          .content { padding: 15px; }
        }
      `}</style>
    </div>
  );
}