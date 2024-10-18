import "./Header.css"
// import "./Header_mobile.css"
import Autocomplete from "./Autocomplete"
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const useCartListener = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const updateCart = () => {
    const updatedCart = localStorage.getItem('cart');
    if (updatedCart) {
      setCart(JSON.parse(updatedCart));
    } else {
      setCart([]);
    }

  };
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'cart') {
        updateCart();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(() => {
      updateCart();
    }, 350);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);
  return cart;
};

function Header() {
  const [cartEnable, setCartEnableState] = useState(false);
  const isCartActive = window.location.pathname === '/cart';
  const cart = useCartListener();
  const totalCart = cart.length;
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const suggestions = ['Молоко', 'Яблоки', 'Orange', 'Pineapple', 'Grapes', 'HTML', "CSS", "JavaScript"];

  return (  
    <nav>
      <header className="header">
          <div className="header__logo">
            <img 
            src={isMobile ? "../images/logo49.png" : "../images/logo152.png"}  
            className={isMobile ? "mobile" : ""} 
            onClick={() => <Link to="/cart"/>}
            alt="Лого"/>
          </div>
          
          <button  className={isMobile ? "header__catalog-button" : "header__catalog-button mobile"}>
            <img src="../images/icons/menu_icon_white.png" alt=""/>
            {isMobile ? "" : "Каталог"}
          </button>
          <div className={isMobile ? "search-bar" : "search-bar mobile"}>
            <Autocomplete suggestions={suggestions}/>
          </div>
          <div className={isMobile ? "header-icons" : "header-icons mobile"}>
              <div className="favorites">
                  <img src="../images/icons/favorite_icon24.png" alt="Избранное"/>
                  <span>Избранное</span>
              </div>
              <div className="orders">
                  <img src="../images/icons/orders-icon24.png" alt="Заказы"/>
                  <span>Заказы</span>
              </div>
              <div className="cart" onClick={() => <Link to="/cart" />}>
                  <img src={isCartActive ? "../images/icons/active-shop-cart-icon24.png" : "../images/icons/shop-cart-icon24.png"} alt="Корзина"/>
                  <span>Корзина</span>
                  <div className="notification"><p>{ totalCart ? totalCart : "0"}</p></div>
              </div>
              <div className={isMobile ? "user-profile" : "user-profile mobile"}>
                  <img src="../images/icons/user-avatar.png" className='avatar' alt="Аватар"/>
                  <p>Алексей</p>
                  <img src="../images/icons/schevron_down.png" className="arrow-down" alt="Стрелка"/>
              </div>
          </div>
        </header>
    </nav>
  );
}

export default Header;
