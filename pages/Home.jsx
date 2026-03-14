import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["cars", "sports", "dentist"];

const categoryPreviews = {
  cars: "/images/product_03.jpg",
  sports: "/images/product_03.jpg",
  dentist: "/images/product_03.jpg",
};

// ألوان لكل كاتيجوري
const categoryColors = {
  cars: "#f44336",
  sports: "#4caf50",
  dentist: "#2196f3",
};

export default function Home({ addToCart }) {
  const featuredProducts = categories
    .map((cat) => products.find((p) => p.category === cat))
    .filter(Boolean);

  return (
    <div className="home">
      <h1 className="title">Frame Conic</h1>

      {/* Featured Products */}
      <div className="section products-section">
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="section categories-section">
        <h2 className="section-title">Categories</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat}`}
              className="category-item"
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                width: "180px",
              }}
            >
              <img src={categoryPreviews[cat]} alt={cat} />
              <div
                className="category-card"
                style={{
                  backgroundColor: categoryColors[cat],
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {cat.toUpperCase()}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="section about-section">
        <h2 className="section-title">About Us</h2>
        <p>
          Frame Conic is a creative studio where every frame tells a story. We
          craft interactive frames inspired by sports, cars, and unique
          professions, adding QR codes to connect users to the story behind each
          design.
        </p>
      </div>

      {/* Contact */}
      <div className="section contact-section">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <strong>Email:</strong>{" "}
            <a href="mailto:miseesmall30@gmail.com">miseesmall30@gmail.com</a>
          </div>
          <div className="contact-item">
            <strong>Phone:</strong> <a href="tel:01100331323">01100331323</a>
          </div>
          <div className="contact-item">
            <strong>Phone:</strong> <a href="tel:01141983196">01141983196</a>
          </div>
          <div className="contact-item">
            <strong>Email:</strong>{" "}
            <a href="mailto:Seifoody4@gmail.com">Seifoody4@gmail.com</a>
          </div>
          <div className="contact-item">
            <strong>Phone:</strong> <a href="tel:01112963622">01112963622</a>
          </div>
        </div>
      </div>

      <style>{`
        .home {
          min-height: 100vh;
          padding: 40px 20px;
          background: radial-gradient(circle at 20% 30%, #2c2c2c, #111);
          position: relative;
          overflow: hidden;
        }

        .home::before {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  background-image: radial-gradient(white 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: .15;
  animation: stars 120s linear infinite;
  z-index: 0;
  pointer-events: none; /* ده المهم */
}

        @keyframes stars {
          from { transform: translateY(0) }
          to { transform: translateY(-1000px) }
        }

        .title {
          text-align: center;
          font-size: 60px;
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 6px;
          margin-bottom: 50px;
          color: white;
          background: linear-gradient(90deg,#fff,#999,#fff);
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 4s linear infinite;
        }

        @keyframes shine {
          0% { background-position: 0% }
          100% { background-position: 200% }
        }

        .section {
          margin-bottom: 60px;
          padding-bottom: 40px;
          border-bottom: 1px solid #444;
        }

        .section:last-child {
          border-bottom: none;
        }

        .section-title {
          text-align: center;
          color: white;
          margin-bottom: 20px;
          font-size: 32px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          max-width: 1000px;
          margin: auto;
        }

        @media(min-width: 600px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(min-width: 900px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Categories */
        .categories-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          justify-content: center;
        }

        .category-item img {
          width: 180px;
          height: 120px;
          object-fit: cover;
          border-radius: 10px;
        }

        .category-card {
          display: inline-block;
          text-decoration: none;
          padding: 18px 15px;
          color: #fff;
          border-radius: 12px;
          font-weight: 700;
          text-align: center;
          width: 100%;
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: background-color 0.3s, transform 0.3s;
          cursor: pointer;
          box-sizing: border-box;
        }

        .category-card:hover {
          transform: scale(1.05);
        }

        @media (min-width: 400px){
          .category-item { width: 45%; }
        }

        @media (min-width: 900px){
          .category-item { width: 28%; }
        }

        .about-section {
          max-width: 800px;
          margin: 0 auto;
          color: #eee;
          line-height: 1.6;
          text-align: center;
        }

        .contact-section {
          max-width: 600px;
          margin: 0 auto;
          color: #eee;
          line-height: 1.6;
          text-align: center;
        }

        .contact-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }

        .contact-grid a {
          color: #fff;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
