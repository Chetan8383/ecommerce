import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import toast from "react-hot-toast";
import { CiDeliveryTruck } from "react-icons/ci";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  // FETCHING ORDERS DETAIL
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        {
          orderId,
          status: event.target.value,
        },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success('Order Status Changed')
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  // ORDERS DETAIL WILL WORK ONLY IF THERE IS A VALID TOKEN
  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-col-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-center border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs text-gray-700"
            key={index}
          >
            <CiDeliveryTruck className="text-2xl" />

            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity} <span>{item.size} </span>,
                      </p>
                    );
                  }
                })}
              </div>
              {/* ADDRESS */}
              <p className="mt-3 mb-3 font-medium">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div>
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    "," +
                    order.address.country +
                    "," +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            {/* ITEM DETAIL */}
            <div>
              <p className="text-sm sm:text-[15px]">
                Items : {order.items.length}
              </p>
              <p className="mt-3">Method : {order.paymentMethod}</p>
              <p>payment : {order.payment ? "Done" : "Pending"}</p>
              <p>Date : {new Date(order.date).toDateString()}</p>
            </div>
            {/* ITEM AMOUNT */}
            <p className="text-sm sm:text-[15px]">
              {currency} {order.amount}
            </p>
            {/*ITEM STATUS */}
            <select
              onChange={(event) => statusHandler(event, order._id)}
              className="p-2 font-semibold"
              value={order.status}
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
