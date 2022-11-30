import React from "react";
import CartProduct from "../components/CartProduct";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Cart = () => {
  const {state: {cart, loading, error}} = useProducts();

  let content;
  if(loading){
    content = <p>Loading...</p>
  }else if(error){
    content = <p>Something went wrong</p>
  }else if(!loading && !error && cart.length === 0){
    content = <p>No product fount</p>
  }else if(!loading && !error && cart.length){
    content = cart.map((product) => <CartProduct key={product.id} product={product}></CartProduct>
   )
  }


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default Cart;
