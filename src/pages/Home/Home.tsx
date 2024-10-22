import React from 'react';
import "./Home.scss"
import Product from "./components/Products"
import ProductC from '../../classes/ProductC';


const products: ProductC[] = [
  {
    id: 1,
    count: 1,
    name: 'Г/Ц Блинчики с мясом вес, Россия',
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
    oldPrice: 50.50,
    newPrice: 44.50,
    discount: 10,
    imageUrl: '/images/products/sosiski.png',
    rating: 4,
  },
];


const Home: React.FC = () => {
  return (
    <div className="home">
      <img className="home__ad-image" src="../../images/ad1440.png" alt="" />
      <div className="home__promotions">
        <h2 className="home__promotions-title">Акции</h2>
        <div className="home__promotions-grid"> 
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <br/><br/>
        <h2 className="home__promotions-title">Новинки</h2>
        <div className="home__promotions-grid">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <br/><br/>
        <h2 className="home__promotions-title">Покупали раньше</h2>
        <div className="home__promotions-grid">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <br/><br/>
      </div>
    </div>
  );
};

export default Home;