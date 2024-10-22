import React from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';
import Autocomplete from './Autocomplete/Autocomplete';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    const products = [
        {
          id: 1,
          count: 1,
          name: 'Г/Ц Блинчики с мясом вес, Россия',
          country: 'Россия',
          oldPrice: 50.50,
          newPrice: 44.50,
          discount: 10,
          imageUrl: '/images/products/blinchiki.png',
          rating: 2,
        },
        {
          id: 2,
          count: 1,
          name: 'Молоко ПРОСТОКВАШИНО Паст. питьевое цельное отборное...',
          oldPrice: 50.50,
          newPrice: 44.50,
          discount: 10,
          imageUrl: '/images/products/moloko.png',
          rating: 3,
        },
        {
          id: 3,
          count: 1,
          name: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
          description: 'МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
          oldPrice: 50.50,
          newPrice: 44.50,
          discount: 10,
          imageUrl: '/images/products/kalbasa.png',
          rating: 5,
        },
        {
          id: 4,
          count: 1,
          name: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
          description: 'МЯСНАЯ ИСТОРИЯ Молочные и С сыром...',
          oldPrice: 50.50,
          newPrice: 44.50,
          discount: 10,
          imageUrl: '/images/products/sosiski.png',
          rating: 4,
        },
      ];

      const suggestion = [
        'JavaScript', 'TypeScript', 'React', 'Redux', 'NodeJS', 'Express', 'MongoDB',
        'HTML', 'CSS', 'Sass', 'LESS', 'Angular', 'Vue', 'Next.js', 'Gatsby',
        'Webpack', 'Babel', 'Jest', 'Mocha', 'Chai', 'Cypress', 'Jasmine',
        'GraphQL', 'Apollo', 'Relay', 'Docker', 'Kubernetes', 'AWS', 'Azure',
        'Firebase', 'Heroku', 'Netlify', 'Git', 'GitHub', 'GitLab', 'Bitbucket',
        'Jenkins', 'CircleCI', 'TravisCI', 'Yarn', 'npm', 'pnpm', 'D3.js', 'Chart.js',
        'Lodash', 'Moment.js', 'Ramda', 'RxJS', 'MobX', 'Redux Saga'
      ];

    return (
        <header className="header">
            <div className="header__content">
                <img className="header__logo" src="images/logo152.png" alt="logo"/>
                
                <Link className="header__catalog" to="/">
                    <img className="header__catalog-logo" src='images/icons/menu-icon-white-24px.png' alt="catalog-icon"/>
                    <p>Каталог</p>
                </Link>
                
                <Autocomplete suggestions={suggestion} />
                
                <div className="header__user-space">
                    <Link to="/register" className='header__user-space__container'>
                        <img className="header__favorites-logo" src="images/icons/favorites-icon-white-24px.png" alt="favorites-icon"/>
                        Избранное
                    </Link>
                    <Link to="/login" className='header__user-space__container'>
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
