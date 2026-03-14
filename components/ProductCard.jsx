import React, { useState } from "react";

export default function ProductCard({ product, addToCart }) {

const [toast,setToast]=useState(null)
const [open,setOpen]=useState(false)
const [imgIndex,setImgIndex]=useState(0)

const numbers=[
"201100331323",
"201141983196",
"201112963622"
]

const buyNow=()=>{
const random=numbers[Math.floor(Math.random()*numbers.length)]
const message=`Hello I want to buy ${product.name}`
window.open(`https://wa.me/${random}?text=${encodeURIComponent(message)}`)
}

const handleAddToCart=()=>{
addToCart(product)
showToast(`${product.name} Added`,product.images[0])
}

const showToast=(message,image)=>{
setToast({message,image})
setTimeout(()=>setToast(null),2000)
}

const nextImg=()=>{
setImgIndex((imgIndex+1)%product.images.length)
}

const prevImg=()=>{
setImgIndex((imgIndex-1+product.images.length)%product.images.length)
}

return(

<>
<div className="product-card">

{toast&&(
<div className="toast">
<img src={toast.image}/>
<span>{toast.message}</span>
</div>
)}

<img
src={product.images[0]}
alt={product.name}
className="card-img"
onClick={()=>setOpen(true)}
/>

<h3>{product.name}</h3>

<p>${product.price}</p>

<div className="btns">

<button onClick={handleAddToCart} className="add">
Add to Cart
</button>

<button onClick={buyNow} className="buy">
Buy
</button>

</div>

</div>


{open&&(

<div className="popup">

<div className="popup-content">

<button className="close" onClick={()=>setOpen(false)}>✕</button>

<button className="arrow left" onClick={prevImg}>❮</button>

<img src={product.images[imgIndex]} className="popup-img"/>

<button className="arrow right" onClick={nextImg}>❯</button>

</div>

</div>

)}

<style>{`

.product-card{

background:#111;
border:10px solid #2f2f2f;
border-radius:6px;

padding:12px;
text-align:center;

font-family:'Poppins',sans-serif;

box-shadow:
0 0 0 3px #000,
0 15px 30px rgba(0,0,0,.7);

transition:.35s;

position:relative;

}

.product-card:hover{

transform:translateY(-8px) scale(1.02);

box-shadow:
0 0 0 3px #000,
0 25px 50px rgba(0,0,0,.9);

}

/* frame effect */

.product-card::before{

content:"";
position:absolute;
top:-8px;
left:-8px;
right:-8px;
bottom:-8px;

border:2px solid #444;
pointer-events:none;

}

/* image */

.card-img{

width:100%;
height:230px;
object-fit:cover;
border-radius:2px;
margin-bottom:12px;

}

/* title */

.product-card h3{

color:white;
font-size:18px;
letter-spacing:1px;

}

.product-card p{

color:#bbb;
font-weight:600;

}

/* buttons */

.btns{

display:flex;
gap:8px;
margin-top:10px;

}

.add{

flex:1;
background:#444;
color:white;
border:none;
padding:8px;
border-radius:4px;
cursor:pointer;
transition:.3s;

}

.buy{

flex:1;
background:#777;
color:white;
border:none;
padding:8px;
border-radius:4px;
cursor:pointer;
transition:.3s;

}

.add:hover{background:#555}
.buy:hover{background:#999}


/* toast */

.toast{

position:absolute;
top:-60px;
left:50%;
transform:translateX(-50%);
background:#4caf50;
color:white;
padding:10px;
border-radius:8px;
display:flex;
gap:10px;
align-items:center;

}

.toast img{

width:35px;
height:35px;
border-radius:5px;

}


/* popup */

.popup{

position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.75);

display:flex;
align-items:center;
justify-content:center;

animation:fadeIn .4s ease;

z-index:999;

}

@keyframes fadeIn{

from{
opacity:0;
}

to{
opacity:1;
}

}

.popup-content{

position:relative;

background:#111;
padding:25px;

border-radius:12px;

animation:zoomIn .35s ease;

box-shadow:0 20px 60px rgba(0,0,0,0.9);

}

@keyframes zoomIn{

from{
transform:scale(.6);
opacity:0;
}

to{
transform:scale(1);
opacity:1;
}

}

.popup-img{

width:500px;
max-width:90vw;
border-radius:10px;

}

.arrow{

position:absolute;
top:50%;
transform:translateY(-50%);

background:#000;
color:white;

border:none;

width:40px;
height:40px;

font-size:20px;

cursor:pointer;

border-radius:50%;

opacity:.8;

transition:.3s;

}

.arrow:hover{

opacity:1;
transform:translateY(-50%) scale(1.1);

}

.left{left:-40px}
.right{right:-40px}

.close{

position:absolute;
top:-15px;
right:-15px;

background:#000;
color:white;

border:none;

width:35px;
height:35px;

border-radius:50%;

cursor:pointer;

font-size:16px;

}

@keyframes fade{

from{opacity:0}
to{opacity:1}

}

`}</style>

</>

)

}