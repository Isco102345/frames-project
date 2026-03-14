import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["cars", "sports", "dentist"];

export default function Category({ addToCart }) {
  const { name } = useParams();

  const filteredProducts = name
    ? products.filter((p) => p.category.toLowerCase() === name.toLowerCase())
    : [];

  return (
    <div className="category-page">
      <h1 className="title">{name ? name.toUpperCase() : "Categories"}</h1>

      {!name && (
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat}`}
              className={`category-card ${cat.toLowerCase()}`}
            >
              {cat.toUpperCase()}
            </Link>
          ))}
        </div>
      )}

      {name && (
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p
              style={{ textAlign: "center", color: "#fff", marginTop: "20px" }}
            >
              No products found.
            </p>
          )}
        </div>
      )}

      <style>{`
        .category-page {
          min-height: 100vh;
          padding: 40px;
          background: radial-gradient(circle at 20% 30%, #2c2c2c, #111);
          position: relative;
          overflow: hidden;
          z-index: 0;
        }

        .category-page::before {
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

        .title {
          text-align: center;
          font-size: 70px;
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 6px;
          margin-bottom: 50px;
          color: white;
          background: linear-gradient(90deg, #fff, #999, #fff);
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 4s linear infinite;
          position: relative;
          z-index: 1;
        }

        @keyframes shine {
          0% { background-position: 0%; }
          100% { background-position: 200%; }
        }

        .products-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 600px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .products-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .categories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          justify-items: center;
          position: relative;
          z-index: 1;
          max-width: 100%;
          margin: 0 auto;
        }

        .category-card {
  text-decoration: none;
  padding: 25px 20px; /* زودت padding شوية */
  color: #fff;
  border-radius: 12px;
  font-weight: 700;          /* أكتر وضوح */
  text-align: center;
  width: 100%;
  max-width: 180px;          /* كارت أكبر شوية */
  transition: background-color 0.3s, transform 0.3s;
  font-family: 'Montserrat', sans-serif; /* فونت جديد أوضح */
  font-size: 20px;           /* كبرنا الخط */
  letter-spacing: 1px;       /* شويه مسافة بين الحروف */
  text-transform: uppercase; /* كل الكلام كبير */
  box-sizing: border-box;
}

        .category-card.cars { background-color: #e53935; }       /* أحمر */
        .category-card.cars:hover { background-color: #d32f2f; }

        .category-card.sports { background-color: #43a047; }     /* أخضر */
        .category-card.sports:hover { background-color: #388e3c; }

        .category-card.dentist { background-color: #1e88e5; }    /* أزرق */
        .category-card.dentist:hover { background-color: #1976d2; }

        @media (min-width: 400px) {
          .categories-grid { grid-template-columns: repeat(2,1fr); max-width: 320px; margin: 0 auto; }
        }
        @media (min-width: 900px) {
          .categories-grid { grid-template-columns: repeat(3,1fr); max-width: 900px; margin: 0 auto; }
        }
      `}</style>
    </div>
  );
}
