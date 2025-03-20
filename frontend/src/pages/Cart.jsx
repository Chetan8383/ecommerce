import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { CiSquarePlus, CiTrash } from "react-icons/ci";
import CartTotal from "../components/cartTotal";

const cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t border-gray-500 pt-10">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {/* CART ITEMS */}
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          console.log(productData);
          

          return (
            <div
              key={index}
              className="p-4 border-b saira-font  border-gray-300 text-gray-700 grid grid-col-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-5">
                {/* cart product image */}
                <img
                  src={productData.image[0]}
                  className="w-16 sm:w-25 rounded-md"
                  alt=""
                />
                <div>
                  {/* product name */}
                  <p className="saira-font-bold text-sm sm:text-lg">
                    {productData.name}
                  </p>
                  {/* price and size */}
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 text-sm border border-violet-900 bg-violet-50 rounded-lg">
                      {item.size}
                    </p>
                  </div>
                  {/*  */}
                </div>
              </div>
              {/* quantity input  */}

              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                type="number"
                min={1}
                defaultValue={item.quantity}
                className="bg-violet-50 focus:ring-1 focus:ring-violet-900 outline-none max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded-md"
              />
              <CiTrash
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="text-2xl cursor-pointer hover:text-red-600"
              />
            </div>
          );
        })}
      </div>

      {/* TOTAL CART AMOUNT */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-violet-600 hover:bg-violet-900 text-white text-sm my-8 px-8 py-3 rounded-lg cursor-pointer"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
