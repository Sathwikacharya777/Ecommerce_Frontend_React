// src/pages/Cart.jsx
import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
    cartCount,
    clearCart,
    placeOrder,
  } = useCart();

  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(cartTotal);

  const handleBuyNow = () => {
    setAmount(cartTotal);
    setShowPaymentPopup(true);
  };

  const handlePay = () => {
    if (!name.trim() || amount <= 0) {
      alert("Please enter a valid name and amount");
      return;
    }

    const orderDetails = {
      name,
      amount,
      items: [...cartItems],
      date: new Date().toLocaleString(),
    };

    placeOrder(orderDetails);
    clearCart();
    setShowPaymentPopup(false);
    setShowSuccess(true);
  };

  const handleCancel = () => {
    setShowPaymentPopup(false);
  };

  const navigate = useNavigate();

  const ownerInputRef = useRef(null);

useEffect(() => {
  if (showPaymentPopup && ownerInputRef.current) {
    ownerInputRef.current.focus();
  }
}, [showPaymentPopup]);

  return (
    <div className="cart-page">
      <h2>
        Your Cart{" "}
        {/* {cartCount > 0 && <span className="cart-badge">{cartCount}</span>} */}
      </h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart-message">
          Your cart’s feeling lonely. Time to show it some love!
        </p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>₹{item.price}</p>
                </div>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <div className="cart-actions">
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="total-amount">Total: ₹{cartTotal}</div>
            <button className="buy-btn" onClick={handleBuyNow}>
              Proceed To Pay
            </button>
          </div>
        </>
      )}

      {/* Payment Popup */}
      {showPaymentPopup && (
        <div className="payment-popup">
          <div className="payment-box">
            <h2>Confirm Your Payment</h2>

            <div className="form-row">
              <input
                type="text"
                placeholder="Owner"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={ownerInputRef}
              />
              <input
                type="text"
                placeholder="CVV"
                maxLength={4}
              />
            </div>

            <div className="form-row">
              <input
              type="text"
              placeholder="Card Number"
              maxLength={16}
            />
            </div>

            <div className="form-row">
              <select>
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
                {/* Add remaining months */}
              </select>
              <select>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                {/* Add more years */}
              </select>

              <div className="payment-icons">
                <img src="/assets/mastercard.png" alt="MasterCard" />
                <img src="/assets/visa.png" alt="Visa" />
                <img src="/assets/paypal.png" alt="PayPal" />
              </div>
            </div>

            <button className="confirm-btn" onClick={handlePay}>
              CONFIRM
            </button>

            <button className="cancel-btn" onClick={handleCancel}>
              CANCEL
            </button>
          </div>
        </div>
      )}


      {/* Order Success Popup */}
      {showSuccess && (
        <div className="confirmation-popup">
          <div className="confirmation-box">
            <h3>✅ Order Placed Successfully!</h3>
            <button
              onClick={() => {
                setShowSuccess(false);
                navigate("/orders"); // 🔁 Redirect to /orders
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
