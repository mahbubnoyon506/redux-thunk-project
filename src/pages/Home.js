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

  const activeClass = "text-white  bg-indigo-500 border-white";


  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
        >
          In Stock
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          AMD
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {products.map((product) => (
          <ProductCard key={product.model} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
