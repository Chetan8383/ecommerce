import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setorderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      } else {
        const response = await axios.post(
          backendUrl + "/api/order/userorders",
          {},
          { headers: { token } }
        );

        if (response.data.success) {
          let allOrdersItem = [];
          response.data.orders.map((order) => {
            order.items.map((item) => {
              item["status"] = order.status;
              item["payment"] = order.payment;
              item["paymentMethod"] = order.paymentMethod;
              item["date"] = order.date;
              //
              allOrdersItem.push(item);
            });
          });
          setorderData(allOrdersItem.reverse());
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="p-4 border border-gray-500 rounded mb-3 bg-violet-50 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img src={item.image[0]} className="w-20 rounded-md" alt="" />
              <div>
                <p className="text-black font-bold">{item.name}</p>
                <div className="flex items-center gap-3 mt-1 text-gray-700">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="mt-1">
                  Date:{" "}
                  <span className="text-gray-400">
                    {new Date(item.date).toDateString()}
                  </span>
                </p>
                <p className="mt-1">
                  Payment:{" "}
                  <span className="text-gray-400">{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-400"></p>
                <small>{item.status}</small>
              </div>
              <button
                onClick={loadOrderData}
                className="border px-4 py-2 bg-violet-200 hover:bg-violet-700 cursor-pointer hover:text-white text-sm font-medium rounded-sm"
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
