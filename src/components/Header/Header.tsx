import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import Autocomplete from './Autocomplete/Autocomplete';
export interface HeaderProps {
}

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
                <img className='logo' src="images/logo152.png"></img>
                
                <Link className='header__content__catalog' to="/"><img src='images/icons/menu-icon-white.png'></img>Каталог</Link>
                <Autocomplete suggestions={suggestion} />
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
