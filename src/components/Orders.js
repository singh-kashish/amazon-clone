import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log(orders);
  const blob = orders?.length !== 0 ? "none" : "block";
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div
        className="ui container segment"
        style={{ display: `${blob}`, height: "500px" }}
      >
        <h1 className="ui" style={{ marginTop: "230px", textAlign: "center" }}>
          ERROR: No Orders Found / Maybe You are not Logged In / Else place an
          order
        </h1>
      </div>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
