import React from 'react';
import "./Header.scss";
import "./Header768.scss";
import "./Header360.scss";

import { Link } from 'react-router-dom';
import Autocomplete from './Autocomplete/Autocomplete';
export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
      const suggestion = [
        'JavaScript', 'TypeScript', 'React', 'Redux', 'NodeJS', 'Express', 'MongoDB',
        'HTML', 'CSS', 'Sass', 'LESS', 'Angular', 'Vue', 'Next.js', 'Gatsby',
        'Webpack', 'Babel', 'Jest', 'Mocha', 'Chai', 'Cypress', 'Jasmine',
        'GraphQL', 'Apollo', 'Relay', 'Docker', 'Kubernetes', 'AWS', 'Azure',
        'Firebase', 'Heroku', 'Netlify', 'Git', 'GitHub', 'GitLab', 'Bitbucket',
        'Jenkins', 'CircleCI', 'TravisCI', 'Yarn', 'npm', 'pnpm', 'D3.js', 'Chart.js',
        'Lodash', 'Moment.js', 'Ramda', 'RxJS', 'MobX', 'Redux Saga'
      ];
        const [isMobileDevice, setIsMobileDevice] = React.useState(false);

        React.useEffect(() => {
        const handleResize = () => {
            setIsMobileDevice(window.innerWidth <= 768);
        };

        // Проверка ширины окна при монтировании компонента
        handleResize();

        // Добавляем слушатель события изменения размера окна
        window.addEventListener("resize", handleResize);

        // Удаляем слушатель при размонтировании компонента
        return () => {
            window.removeEventListener("resize", handleResize);
        };
        }, []);
    return (
        <header className="header">
            <div className="header__content">
                <Link  to="/">
                  <img className="header__logo" src={ isMobileDevice ? "images/logo49.png" : "images/logo152.png"} alt="logo"/>
                </Link>
                
                <Link className="header__catalog" to="/">
                    <img className="header__catalog-logo" src='images/icons/menu-icon-white-24px.png' alt="catalog-icon"/>
                    <p>Каталог</p>
                </Link>
                
                <Autocomplete suggestions={suggestion} />
                
                <div className="header__user-space">
                    <Link to="/favorite" className='header__user-space__container'>
                        <img className="header__favorites-logo" src="images/icons/favorites-icon-white-24px.png" alt="favorites-icon"/>
                        Избранное
                    </Link>
                    <Link to="/orders" className='header__user-space__container'>
                        <img className="header__favorites-logo" src="images/icons/orders-icon-white-24px.png" alt="orders-icon"/>
                        Заказы
                    </Link>
                    <Link to="/cart" className='header__user-space__container'>
                        <img className="header__favorites-logo" src="images/icons/cart-icon-white-24px.png" alt="cart-icon"/>
                        Корзина
                        <div>
                          {/* TODO здесь будет выведено количество товаров в корзине */}  
                        </div>
                    </Link>
                </div>
                
                <div className="header__user-info">
                    <img className="header__user-info__avatar" src="images/avatar.png" alt="User avatar"/>
                    <span className="header__user-info__name">Алексей</span>
                </div>  
            </div>
        </header>
    );
};
