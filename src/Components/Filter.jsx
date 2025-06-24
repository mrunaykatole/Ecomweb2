// import React, { useEffect, useState } from "react";
// import Womens from "../assets/image.png"
// import Jewelery from "../assets/Jewelery.png"
// import Electronics from "../assets/Electronics.jpg"
// import Mens from "../assets/Men's.png"
// function Filter({ fill, addtoCart }) {
//   const [d, setD] = useState([]);
//   useEffect(() => {
//     filterData()
//   }, []);
//   function filterData(cat) {
//     let filterD = fill.filter((e) => e.category === cat);
//     // console.log(filterD); 
//     setD(filterD);
//     console.log(d)
//   }

//   return <>
//   <div id="filter-pro">
//    <button onClick={()=>filterData("women's clothing")}><img src={Womens} alt="Women's" width={150}/><br/><h2>Women's</h2></button>
//    <button onClick={()=>filterData('jewelery')}><img src={Jewelery} alt="Jewelery" width={210}/><br/><h2>Jewelery</h2></button>
//    <button onClick={()=>filterData('electronics')}><img src={Electronics} alt="Electronics" width={350}/><br/><h2>Electronics</h2></button>
//    <button onClick={()=>filterData("men's clothing")}><img src={Mens} alt="Mens" width={225}/><br/><h2>Men's</h2></button>
//   </div>
// <div className="filter-cat">
// {
   
//     d.map((item)=>(
//         <>
        
//         <div className="filter-cat-1">
//         <h1>{item.title}</h1>
//         <img src={item.image} width="50px"/>
//         <h4>Category:-<strong>{item.category}</strong></h4>
//         <h4>Price:<strong>{item.price}</strong></h4>
//         <button onClick={()=>addtoCart(item)}>🛒</button>
//         </div>
        
//         </>
        
//     ))
    
// }
// </div>   
   
//     </>;
// }
// export default Filter;


import React, { useEffect, useState } from "react";
import Womens from "../assets/image.png";
import Jewelery from "../assets/Jewelery.png";
import Electronics from "../assets/Electronics.jpg";
import Mens from "../assets/Men's.png";
import Aos from "aos";
import "aos/dist/aos.css"

function Filter({ fill, addtoCart }) {
  useEffect(()=>{
    Aos.init({
      duration:1000,
      once:false,
      delay:300
    })
  },[])
  const [d, setD] = useState([]);

  useEffect(() => {
    // By default show all products
    setD(fill);
  }, [fill]);

  function filterData(cat) {
    const filterD = fill.filter((e) => e.category === cat);
    setD(filterD);
  }

  return (
    <>
      <div id="filter-pro" data-aos="fade-up">
        <button onClick={() => filterData("women's clothing")}>
          <img src={Womens} alt="Women's" />
          <span>Women's</span>
        </button>
        <button onClick={() => filterData("jewelery")}>
          <img src={Jewelery} alt="Jewelery" />
          <span>Jewelery</span>
        </button>
        <button onClick={() => filterData("electronics")}>
          <img src={Electronics} alt="Electronics" />
          <span>Electronics</span>
        </button>
        <button onClick={() => filterData("men's clothing")}>
          <img src={Mens} alt="Men's" />
          <span>Men's</span>
        </button>
      </div>

      <div className="filter-cat">
        {d.map((item) => (
          <div className="filter-cat-1" key={item.id} data-aos="flip-left">
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title} />
            <h4>
              Category: <strong>{item.category}</strong>
            </h4>
            <h4>
              Price: <strong>₹{item.price}</strong>
            </h4>
            <button onClick={() => addtoCart(item)}>🛒</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Filter;
