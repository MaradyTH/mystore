import React from "react";
import { Link } from "react-router-dom"; 
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="col-lg-4">
      <div className="item">
        <div className="thumb">
          <div className="hover-content">
            <ul>
              <li>
               
                <Link to={`/product/${product.id}`}>
                  <i className="fa fa-eye"></i>
                </Link>
              </li>
        
              <li>
                <a href="#">
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>
          <img className="product-image" src={product.image} alt={product.title} />
        </div>
        <div className="down-content">
          <h4 className="product-title">{product.title}</h4>
          <span>${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
