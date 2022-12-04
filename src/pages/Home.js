import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
  // const {state: {products, loading, error}} = useProducts();


  const [products, setProducts] = useState([])

  useEffect(() => {
    (
      async () => {
        await fetch('http://localhost:8000/products')
          .then(res => res.json())
          .then(data => setProducts(data))
      }
    )()
  }, [])

  const state = useSelector((state) => state);
  console.log(state);


  // let content;
  // if(loading){
  //   content = <p>Loading...</p>
  // }else if(error){
  //   content = <p>Something went wrong</p>
  // }else if(!loading && !error && products.length === 0){
  //   content = <p>No product found</p>
  // }else if(!loading && !error && products.length){
  //   content = products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>
  //  )
  // }


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        products.map((product, index) =>
          <ProductCard key={product.id} product={product}></ProductCard>
        )
      }
    </div>
  );
};

export default Home;
