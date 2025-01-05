import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const Checkout = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleApproval = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert(`Transaction completed by ${details.payer.name.given_name}`);
      
      setPaymentSuccess(true);
      localStorage.removeItem("cart"); 
    });
  };
  

  return (
    <div className="container my-5">
      <h2>Checkout</h2>
      {paymentSuccess ? (
        <div className="alert alert-success">
          <h4>Payment Successful!</h4>
          <p>Your order has been successfully processed. Thank you for your purchase!</p>
          <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
      ) : cartItems.length === 0 ? (
        <p>Cart is empty. <Link to="/products" className="btn btn-success">Go to products page</Link></p>
      ) : (
        <div>
          <h4>Total Price: ${totalPrice}</h4>
          <PayPalScriptProvider options={{ "client-id": "AeDGY0GP_ctai8nC10_GJ8U7VE4qmwSsAa0E4bicnQ9a-1xukNFq9VxZsk0fESKFXtSBiOd6YstC0Mur", "currency": "USD" }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: totalPrice.toFixed(2),
                      },
                    },
                  ],
                });
              }}
              onApprove={handleApproval}
              onError={(err) => {
                console.error("PayPal error:", err);
                alert("An error occurred during the payment process.");
              }}
            />
          </PayPalScriptProvider>
          <div className="d-flex justify-content-between mt-3">
            <Link to="/cart" className="btn btn-success">Back to Cart</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;