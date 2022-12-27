import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Cart = () => {
  // const {state: {cart, loading, error}} = useProducts();

  const cart = useSelector((state) => state.product.cart)

  console.log(cart)

  // let content;
  // if(loading){
  //   content = <p>Loading...</p>
  // }else if(error){
  //   content = <p>Something went wrong</p>
  // }else if(!loading && !error && cart.length === 0){
  //   content = <p>No product found</p>
  // }else if(!loading && !error && cart.length){
  //   content = cart.map((product) => <ProductCard key={product.id} product={product}></ProductCard>
  //  )
  // }

  // console.log(cart)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {
          cart
          .sort((a, b) => a._id - b._id)
          .map((product, index) => 
          <ProductCard key={index} product={product}></ProductCard>
          )
        }
    </div>
  );
};

export default Cart;
