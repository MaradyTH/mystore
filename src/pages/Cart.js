import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link to="/" className="btn btn-primary">
            Browse products
          </Link>
        </p>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={item.image} alt={item.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Price: ${item.price}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="quantity-control">
                      <button
                        onClick={() => updateQuantity(item.id, "decrease")}
                        className="btn btn-secondary btn-sm"
                      >
                        -
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, "increase")}
                        className="btn btn-secondary btn-sm"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="d-flex justify-content-between">
        <h4>Total: ${totalPrice}</h4>
        <Link to="/checkout" className="btn btn-info">
          Checkout
        </Link>
        <Link to="/" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;