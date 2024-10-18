import React from 'react';
import "./Home.css"
import Product from "../components/Products"
const products = [
  {
    id: 1,
    name: 'Г/Ц Блинчики с мясом вес, Россия',
    country: 'Россия',
    oldPrice: 50.50,
    newPrice: 44.50,
    imageUrl: '/images/products/blinchiki.png',
    rating: 2,
  },
  {
    id: 2,
    name: 'Молоко ПРОСТОКВАШИНО Паст. питьевое цельное отборное...',
    oldPrice: 50.50,
    newPrice: 44.50,
    imageUrl: '/images/products/moloko.png',
    rating: 3,
  },
  {
    id: 3,
    name: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
    description: 'МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
    oldPrice: 50.50,
    newPrice: 44.50,
    imageUrl: '/images/products/kalbasa.png',
    rating: 5,
  },
  {
    id: 4,
    name: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
    description: 'МЯСНАЯ ИСТОРИЯ Молочные и С сыром...',
    oldPrice: 50.50,
    newPrice: 44.50,
    imageUrl: '/images/products/sosiski.png',
    rating: 4,
  },
];


const Home = () => {
  return (
    <div className="content">
      <img className='ad-image' src="../../images/ad1440.png" alt=""/>
      <div className="promotions">
        <h2 className='products__title'>Акции</h2>
        <div className="products-grid">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div><br/><br/>
        <h2 className='products__title'>Новинки</h2>
        <div className="products-grid">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div><br/><br/>
        <h2 className='products__title'>Покупали раньше</h2>
        <div className="products-grid">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div><br/><br/>

      </div>
    </div>
  );
};

export default Home;
