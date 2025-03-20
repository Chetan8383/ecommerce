import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 8));
  }, [products]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="my-10 ">
      <div className="text-center text-3xl py-8">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          hop our best-selling anime merch—fan favorites loved by otakus!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 gap-y-8">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          onClick={scrollToTop}
          to="/collection"
          className="group relative inline-block focus:ring-3 focus:outline-hidden"
        >
          <span className="absolute justify-center inset-0 translate-x-1.5 translate-y-1.5 bg-violet-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

          <span className="relative inline-block border-2 border-current px-18 py-3 text-sm font-bold tracking-widest text-black uppercase">
            View All
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BestSeller;
