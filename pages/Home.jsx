
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home({ addToCart }) {

return(

<div className="home">

<h1 className="title">Frame Conic</h1>

<div className="products-grid">

{products.map(product=>(
<ProductCard key={product.id} product={product} addToCart={addToCart}/>
))}

</div>

<style>{`

.home{
min-height:100vh;
padding:40px;
background: radial-gradient(circle at 20% 30%, #2c2c2c, #111);
position:relative;
overflow:hidden;
}

/* stars animation */

.home::before{
content:"";
position:absolute;
width:200%;
height:200%;
background-image:radial-gradient(white 1px, transparent 1px);
background-size:40px 40px;
opacity:.15;
animation:stars 120s linear infinite;
}

@keyframes stars{
from{transform:translateY(0)}
to{transform:translateY(-1000px)}
}

/* title */

.title{

text-align:center;
font-size:70px;
font-family:'Bebas Neue',sans-serif;
letter-spacing:6px;
margin-bottom:50px;
color:white;

background:linear-gradient(90deg,#fff,#999,#fff);
background-size:200%;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;

animation:shine 4s linear infinite;

}

@keyframes shine{
0%{background-position:0%}
100%{background-position:200%}
}

/* grid */

.products-grid{

display:grid;
grid-template-columns:repeat(2,1fr);
gap:20px;
max-width:1400px;
margin:auto;

}

@media(min-width:768px){

.products-grid{
grid-template-columns:repeat(3,1fr);
}

}

@media(min-width:1200px){

.products-grid{
grid-template-columns:repeat(4,1fr);
}

}

`}</style>

</div>

)

}