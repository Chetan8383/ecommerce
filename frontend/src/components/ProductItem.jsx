import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="group block overflow-hidden ">
      <div className="relative h-[200px] sm:h-[300px] ">
        <img
          src={image[0]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
        />

        <img
          src={image[1]}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>

      <div className="relative bg-white ">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {name}
        </h3>

        <p className="mt-1.5 tracking-wide text-gray-900">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
