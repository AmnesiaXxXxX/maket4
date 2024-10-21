import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import Autocomplete from './Autocomplete/Autocomplete';
export interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <header className="header">
            <div className="header__content">
                <img className='logo' src="images/logo152.png"></img>
                
                <Link className='header__content__catalog' to="/"><img src='images/icons/menu-icon-white.png'></img>Каталог</Link>
                <div className="header__content__search-bar">
                    <Autocomplete placeholder="Найти товар"/>
                </div>
                <div className="header__content__user-space">
                    <Link to="/register">Избранное</Link>
                    <Link to="/login">Заказы</Link>
                    <Link to="/cart">Корзина</Link>

                </div>
                <div className="header__content__user-info">
                    <img className="header__content__user-info__avatar" alt="User avatar"/>
                    <div className="header__content__user-info__name">
                    </div>
                </div>  
            </div>
        </header>
    );
};
