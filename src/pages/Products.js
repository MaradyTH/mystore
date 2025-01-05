import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { CartContext } from "../components/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });

    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(["all", ...data]); 
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const getFirstWord = (title) => {
    const words = title.split(" ");
    return words[0];
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  
  const { addToCart, cartCount } = useContext(CartContext);

  return (
    <>
      {/* Main Banner Area Start */}
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>Our Products</h2>
                <span>Purchase our products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Banner Area End */}

      {/* Products Area Starts */}
      <section className="section" id="products">
        <div className="container"> 
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our Products</h2>
                <span>Check out all of our products</span>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="row">
            <div className="col-lg-12">
              <div className="category-filter">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div> 

        <div className="container">
          <div className="row">
            {isLoading ? (
              <p>Loading products...</p>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col-lg-4" key={product.id}>
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
                            <Link onClick={() => addToCart(product)}>
                              
                              <FaShoppingCart size={20}/>
                              {cartCount > 0 && (<span className="cart-badge position-absolute">{cartCount}</span>)}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="down-content">
                      <h4>{getFirstWord(product.title)}</h4>
                      <span>${product.price}</span>
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt"></i>
                        </li>
                        <li>
                          <i className="fa fa-star-o"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found in this category.</p>
            )}
          </div>
        </div>
      </section>
      {/* Products Area Ends */}
    </>
  );
}

export default Products;
