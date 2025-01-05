import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SidebarCart.css";


const SidebarCart = ({ isOpen, closeSidebar }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    setCartItems(savedCart ? JSON.parse(savedCart) : []);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={`sidebar-cart ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h3>Your Cart</h3>
        <button className="close-btn" onClick={closeSidebar}>X</button>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <p>Qty: {item.quantity}</p>
                <button
                  className="remove-item-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="sidebar-footer">
        <h4>Total: ${totalPrice}</h4>
        <Link to="/cart" className="btn checkout-btn">Go to Cart</Link>
      </div>
    </div>
  );
};

export default SidebarCart;
