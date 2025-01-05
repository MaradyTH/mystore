import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";  

const ProductSection = ({ title, category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        const filteredProducts = data.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  const { addToCart, cartCount } = useContext(CartContext);

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>{title}</h2>
              <span>Find the latest styles in our {title} collection.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3" key={product.id}>
              <div className="item">
                <div className="thumb">
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ height: "200px", width: "150px" }}
                  />
                  <div className="hover-content">
                    <ul>
                      <li>
                        <Link to={`/product/${product.id}`}> {/* Use Link to navigate */}
                          <i className="fa fa-eye"></i> {/* Eye icon to view product */}
                        </Link>
                      </li>
                      
                      <li>
                        <a onClick={() => addToCart(product)}>
                          <i className="fa fa-shopping-cart"></i>
                          {cartCount > 0 && (<span className="cart-badge position-absolute">{cartCount}</span>)} 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="down-content">
                  <h4>{product.title.split(" ")[0]}</h4> {/* Only first word */}
                  <span>${product.price.toFixed(2)}</span>
                  <ul className="stars">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <i
                          className={
                            i < Math.round(product.rating.rate)
                              ? "fa fa-star"
                              : "fa fa-star-o"
                          }
                        ></i>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
