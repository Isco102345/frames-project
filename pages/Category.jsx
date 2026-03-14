import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["cars", "sports", "dentist"];

export default function Category({ addToCart }) {
  const { name } = useParams();

  const filteredProducts = name
    ? products.filter(p => p.category.toLowerCase() === name.toLowerCase())
    : [];

  return (
    <div className="category-page">
      <h1 className="title">
        {name ? name.toUpperCase() : "Categories"}
      </h1>

      {!name && (
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link key={cat} to={`/category/${cat}`} className="category-card">
              {cat.toUpperCase()}
            </Link>
          ))}
        </div>
      )}

      {name && (
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p style={{ textAlign: "center", color: "#fff", marginTop: "20px" }}>
              No products found.
            </p>
          )}
        </div>
      )}

     <style>{`
  /* الصفحة */
  .category-page {
    min-height: 100vh;
    padding: 40px;
    background: radial-gradient(circle at 20% 30%, #2c2c2c, #111);
    position: relative;
    overflow: hidden;
    z-index: 0; /* stars خلف كل حاجة */
  }

  /* stars animation */
  .category-page::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background-image: radial-gradient(white 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.15;
    animation: stars 120s linear infinite;
    z-index: 0; /* stars خلف كل العناصر */
  }

  @keyframes stars {
    from { transform: translateY(0); }
    to { transform: translateY(-1000px); }
  }

  /* العنوان */
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
    z-index: 1; /* فوق stars */
  }

  @keyframes shine {
    0% { background-position: 0%; }
    100% { background-position: 200%; }
  }

  /* شبكات المنتجات */
  .products-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    position: relative;
    z-index: 1; /* فوق stars */
  }

  @media (min-width: 600px) {
    .products-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 900px) {
    .products-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* شبكات الكاتيجوري */
  .categories-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-items: center;
    position: relative;
    z-index: 1; /* فوق stars */
  }

  @media (min-width: 600px) {
    .categories-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 900px) {
    .categories-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* كروت الكاتيجوري */
  .category-card {
    text-decoration: none;
    padding: 20px;
    background-color: #2196f3;
    color: #fff;
    border-radius: 10px;
    font-weight: bold;
    text-align: center;
    width: 150px;
    transition: background-color 0.3s, transform 0.3s;
    font-family: 'Bebas Neue', sans-serif;
    position: relative;
    z-index: 1; /* فوق stars */
  }

  .category-card:hover {
    background-color: #1976d2;
    transform: scale(1.05);
  }
`}</style>
    </div>
  );
}