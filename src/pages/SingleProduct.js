import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; 
import { Link } from "react-router-dom";
import { CartContext } from "../components/CartContext";

const SingleProduct = () => {
  const { addToCart, cartCount } = useContext(CartContext);
  const { id } = useParams();  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]); 

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <>

    {/* Main Banner Area Start */}
    <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>Single Product Page</h2>
                <span>Detail of single product</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Banner Area End */}
    
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "80%", height: "auto"}}
          />
        </div>
        <div className="col-lg-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p><strong>Price: ${product.price}</strong></p>
          <p><strong>Rating:</strong> {product.rating.rate} / 5</p>
  
          <button onClick={() => addToCart(product)}>Add to Cart
             {cartCount > 0 && (<span className="cart-badge position-absolute">{cartCount}</span>)} 
          </button>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleProduct;
