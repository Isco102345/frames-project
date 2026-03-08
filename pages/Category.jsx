import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["cars", "sports", "dentist"];

export default function Category({ addToCart }) {
  const { name } = useParams();

  if (!name) {
    return (
      <div style={{ padding: "40px" }}>
        <h1 style={{ textAlign: "center" }}>Categories</h1>
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link key={cat} to={`/category/${cat}`} className="category-card">{cat.toUpperCase()}</Link>
          ))}
        </div>

        <style>
          {`
            .categories-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 20px;
              justify-items: center;
            }

            @media(min-width: 600px){
              .categories-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media(min-width: 900px){
              .categories-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .category-card {
              text-decoration: none;
              padding: 20px;
              background-color: #2196f3;
              color: #fff;
              border-radius: 10px;
              font-weight: bold;
              text-align: center;
              width: 150px;
            }

            .category-card:hover {
              background-color: #1976d2;
            }
          `}
        </style>
      </div>
    );
  }

  const filteredProducts = products.filter(p => p.category.toLowerCase() === name.toLowerCase());

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>{name.toUpperCase()}</h1>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No products found.</p>
        )}
      </div>

      <style>
        {`
          .products-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }

          @media(min-width: 600px){
            .products-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media(min-width: 900px){
            .products-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>
    </div>
  );
}