// import React from "react";
// import { useState,useEffect } from "react";
// import "./Cart.css"

// function Cart({cart ,setCart}){
//     const [ad,setAd]=useState([])
//     useEffect(()=>{
//         cartData(cart)
//     },[cart])
//     function cartData(item){
//     const addCart=cart.reduce((sum, item)=> sum + item.price, 0).toFixed(2);
//     console.log(item)
//     setAd(addCart)
//     }
//     console.log(ad)
//     return(
//         <>
//         <div className="cart-add">
//         {
//     cart.map((item)=>(
//         <>
//         <div className="cart-add-img">
//          <img src={item.image} width="50px"/>
//          </div>
//          <div className="cart-add-text">
//         <h1>{item.title}</h1>
//         <h3>{item.category}</h3>
//         <h4>Price:<strong>{item.price}</strong></h4>
//         <button>Remove</button>
//         </div>
       
       
//         </>
//     ))
    
// } 
// </div>
//  <hr/>
//         <h4>Total:<strong>${ad}</strong></h4>
//          <button onClick={()=>setCart([])}>Delet 🛒</button>
//         </>
//     )
// }
// export default Cart;


import React, { useState, useEffect } from "react";
import "./Cart.css";

function Cart({ cart, setCart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const addCart = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    setTotal(addCart);
  }, [cart]);

  return (
    <>
      <div className="cart-add">
        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <div className="cart-add-img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-add-text">
              <h1>{item.title}</h1>
              <h3>{item.category}</h3>
              <h4>Price: <strong>₹{item.price}</strong></h4>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <hr />
      <div className="cart-total">
        <h4>Total: <strong>₹{total}</strong></h4>
        <button onClick={() => setCart([])}>Delete 🛒</button>
      </div>
    </>
  );

  // Function to remove single item
  function handleRemove(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }
}

export default Cart;
