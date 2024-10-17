import React from "react";
import "./Header.css"
import "./Header_mobile.css"
import Autocomplete from "./Autocomplete"
function Header() {
    console.log(navigator.userAgent)
    const isMobile = !/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    console.log(isMobile ? "Не мобильное" : "Мобильное")
    const suggestions = ['Молоко', 'Яблоки', 'Orange', 'Pineapple', 'Grapes'];
  return (
    <nav>
      <header className="header">
          <div className="header__logo">
            <img src={isMobile ? "../images/logo152.png" : "../images/logo49.png"}  className={isMobile ? "" : "mobile"} alt="Лого"/>
          </div>
          
          <button  className={isMobile ? "header__catalog-button" : "header__catalog-button mobile"}>
            <img src="../images/icons/menu_icon_white.png" alt=""/>
            {isMobile ? "Каталог" : ""}
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
              <div className="cart">
                  <img src="../images/icons/shop-cart-icon24.png" alt="Корзина"/>
                  <span>Корзина</span>
                  <div className="notification"><p>99+</p></div>
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
