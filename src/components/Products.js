import React from 'react';
import "./Products.css"
    
const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span className='image-wrapper' key={i}>
        <img style={{ filter: i < rating ? 'orange' :  'grayscale(100%)' }} className="star" src='/images/icons/star_icon.png'>
        </img>
      </span>
    );
  }
  return <div className='stars'>{stars}</div>;
};

// Компонент для отображения продукта
const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.imageUrl} alt={product.name} />
    <p>
      <span className="new-price">{parseFloat(product.newPrice).toFixed(2)} ₽</span>{' '}
      <span className="old-price">{parseFloat(product.oldPrice).toFixed(2)} ₽</span>
    </p>    
    <p className="product-name">{product.name}</p>
    <Rating rating={product.rating} />
    <button className='product-button'>В корзину</button>
  </div>
);



export default ProductCard;
