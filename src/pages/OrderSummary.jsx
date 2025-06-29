// src/pages/OrderSummary.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/OrderSummary.css"; // Create this file if you want styling

function OrderSummary() {
  const { orders } = useCart();

  return (
    <div className="order-summary-page">
      <h2>📦 Order Summary</h2>

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <table className="order-table">
          <thead>
            <tr>
              <th>SlNo</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.name}</td>
                <td>₹{order.amount}</td>
                <td>{order.date}</td>
                <td>
                  <ul>
                    {order.items.map((item) => (
                      <li key={item.id}>
                        {item.name} (x{item.quantity})
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrderSummary;
