import React from "react";
import "./Header.css"
function Header() {
  return (
    <nav>
      <header class="header">
          <div class="header__logo">
            <img src="../images/logo152.png" alt="Лого"/>
          </div>
          
          <button class="header__catalog-button">
            <img src="../images/icons/menu_icon_white.png" />
            Каталог
          </button>
          <div class="search-bar">
            <img src="../images/icons/search_icon.png" alt="Иконка поиска" class="search-icon"/>
            <input type="text" placeholder="Найти товар"/>
          </div>
          <div class="header-icons">
              <div class="favorites">
                  <img src="../images/icons/favorite_icon24.png" alt="Избранное"/>
                  <span>Избранное</span>
              </div>
              <div class="orders">
                  <img src="../images/icons/orders-icon24.png" alt="Заказы"/>
                  <span>Заказы</span>
              </div>
              <div class="cart">
                  <img src="../images/icons/shop-cart-icon24.png" alt="Корзина"/>
                  <span>Корзина</span>
                  <div class="notification"><p>99+</p></div>
              </div>
              <div class="user-profile">
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
