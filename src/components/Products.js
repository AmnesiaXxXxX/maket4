import "./Products.css"
import { useState, useEffect } from 'react';

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

// Компонент для отображения продукт
const ProductCard = ({ product }) => {
  const [onActive, setOnActive] = useState(false);

  // Проверяем при монтировании, есть ли товар в корзине
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productInCart = cart.some(item => item.id === product.id);
    setOnActive(productInCart);
  }, [product.id]);

  const handleButtonClick = () => {
    setOnActive(!onActive);

    // Получаем текущую корзину из localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (!onActive) {
      // Добавляем товар в корзину, если его там нет
      if (!cart.some(item => item.id === product.id)) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    } else {
      // Удаляем товар из корзины, если он там есть
      cart = cart.filter(item => item.id !== product.id);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  return (
    <div className="product-card">
      <img className="product-image" src={product.imageUrl} alt={product.name} />
      <p>
        <span className="new-price">{parseFloat(product.newPrice).toFixed(2)} ₽</span>{' '}
        <span className="old-price">{parseFloat(product.oldPrice).toFixed(2)} ₽</span>
      </p>
      <p>
        <span className="with-card">{parseFloat(product.newPrice).toFixed(2)} ₽</span>{' '}
        <span className="without-card">{parseFloat(product.oldPrice).toFixed(2)} ₽</span>
      </p>
      <p className="product-name">{product.name}</p>
      <Rating rating={product.rating} />
      <button
        className={`product-button${onActive ? ' active' : ''}`}
        onClick={handleButtonClick}
      >
        {onActive ? 'В корзине' : 'В корзину'}
      </button>
    </div>
  );
};

export default ProductCard;
