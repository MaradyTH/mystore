import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./CartContext";


function Header() {
  const { cartCount } = useContext(CartContext);
  return (
    <>
      {/* Preloader Start */}
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* Preloader End */}

      {/* Header Area Start */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                
                <Link to="/" className="logo">
                  <img src="assets/images/logo.png" alt="Logo" />
                </Link>
                

                {/* Menu Start */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#men">Men's</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#women">Women's</a>
                  </li>

                  <li className="scroll-to-section">
                    <a href="#electronic">Electronic</a>
                  </li>     
                  <li className="scroll-to-section">
                    <a href="#jewelery">Jewelery</a>
                  </li>
      
                  <li className="submenu">
                    <a href="javascript:;">Pages</a>
                    <ul>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/products">Products</Link>
                      </li>
                      <li>
                        <Link to="/single-product">Single Product</Link>
                      </li>
                      <li className="scroll-to-section">
                        <Link to="/cart">Cart</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </li>
                  
                  <li className="scroll-to-section">
                    <a href="#explore">Explore</a>
                  </li>
                  <li className="scroll-to-section">
                    <Link to="/cart">
                      <FaShoppingCart size={20}/>
                      {cartCount > 0 && (<span className="cart-badge position-absolute">{cartCount}</span>)} </Link>
                  </li>
                  
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* Menu End */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header Area End */}
    </>
  );
}

export default Header;
