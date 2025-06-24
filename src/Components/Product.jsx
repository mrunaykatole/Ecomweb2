// import React from "react";
// import "./Product.css"
// import Cart2 from "../assets/Cart2.png"
// function Product({data ,addtoCart}){
// return(
//     <>
//     <div id="main-product">
//     {
        
//         data.map((item,ind)=>{
//             return(
//                 <div id="product">
                    
//                      <img src={item.image} width={100}/>
//            <div key={item.id}>
//              <h1>{item.title}</h1>
            
//              <h3>Category:-<strong>{item.category}</strong></h3>
//             <h4>Price:<mark>${item.price}</mark></h4>
            
            
//             <div id="btn">
                
//             <button className="button">Buy Now</button>
//              <button onClick={()=>addtoCart(item)} >🛒</button>
//             </div>
           
//            </div>
           
//            </div>
//             )
            
//         })
//     }
//     </div>
//     </>
// );
// }
// export default Product;


import React from "react";
import "./Product.css";
import Cart2 from "../assets/Cart2.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Product({ data, addtoCart }) {
  useEffect(()=>{
    AOS.init({
      duration:3000,
      once:false,
    })
  },[])
  return (
    <div id="main-product">
      {data.map((item) => (
        <div id="product" key={item.id} data-aos="slide-right">
          <div className="product-top">
            <button onClick={() => addtoCart(item)} className="cart-btn">
              <img src={Cart2} alt="cart" id="cart-heart" />
            </button>
          </div>
          <img src={item.image} alt={item.title} className="product-img" />
          <h1>{item.title}</h1>
          <h3>Category: <strong>{item.category}</strong></h3>
          <h4>Price: <mark>₹{item.price}</mark></h4>
          <div id="btn">
            <button className="button">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
