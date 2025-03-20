import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import {
  CiCircleCheck,
  CiShoppingBasket,
  CiShoppingCart,
  CiStar,
} from "react-icons/ci";
import RelatedProducts from "../components/RelatedProducts";

const Products = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t border-gray-200 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-x-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 rounded-md"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%] overflow-hidden">
            <img
              src={image}
              className="w-full h-auto hover:scale-110 duration-400"
              alt=""
            />
          </div>
        </div>
        {/* ==========PRODUCT INFO-------- */}
        <div className="flex-1 saira-font">
          <h1 className="font-semibold saira-font-bold text-2xl">
            {productData.name}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            <CiStar className="text-amber-500" />
            <CiStar className="text-amber-500" />
            <CiStar className="text-amber-500" />
            <CiStar className="text-amber-500" />
            <CiStar className="text-gray-500" />
            <p className="pl-2 text-violet-700 hover:text-violet-900 cursor-pointer">
              122 reviews
            </p>
          </div>
          <p className="mt-4 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-4 text-gray-500 md:w-4/5 ">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border border-transparent py-2 px-4 bg-violet-100 rounded-lg ${
                    item === size ? "border-violet-600" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-x-4">
            <button
              onClick={() => addToCart(productData._id, size)}
              className="bg-violet-500 cursor-pointer flex items-center rounded-lg text-white px-4 py-3 text-sm active:bg-violet-700"
            >
              ADD TO BAG
              <CiShoppingBasket className="text-2xl ml-2" />
            </button>
            <Link to="/cart" onClick={scrollToTop}>
              <button className="bg-violet-50 border border-violet-700 cursor-pointer flex items-center rounded-lg duration-200 text-black px-4 py-3 text-sm hover:bg-violet-500 hover:text-white active:bg-violet-500">
                View Cart
                <CiShoppingCart className="text-2xl ml-2" />
              </button>
            </Link>
          </div>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p className="flex items-center">
              <CiCircleCheck className="text-violet-600 mr-2" /> 100% Orignal
              Product.
            </p>
            <p className="flex items-center">
              <CiCircleCheck className="text-violet-600 mr-2" /> Cash on
              delivery is available on this product.
            </p>
            <p className="flex items-center">
              {" "}
              <CiCircleCheck className="text-violet-600 mr-2" /> Easy return and
              policy within 7 days.
            </p>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="mt-20">
        <div className="space-y-4">
          <details
            className="group border-s-4 border-violet-500 rounded-r-2xl  bg-violet-50 p-3 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900 saira-font-bold">
                Product Description
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              {productData.description}
            </p>
          </details>

          <details className="group border-s-4 border-violet-500 rounded-r-2xl  bg-violet-50 p-3 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900 saira-font-bold">
                Specifications
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <div className="flow-root mt-4 leading-relaxed text-gray-700">
              <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Product Name</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {productData.name}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Type</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {productData.subCategory}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Category</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {productData.category}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Fabric</dt>
                  <dd className="text-gray-700 sm:col-span-2">Cotton 100%</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Fabric Care</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    Do not bleach, Regular Machine Wash, Hand wash
                  </dd>
                </div>
              </dl>
            </div>
          </details>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Products;
