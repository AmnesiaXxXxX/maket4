import "./Products.scss"
import {useState, useEffect} from 'react'
import ProductC from '../../../classes/ProductC';

const Rating: React.FC<{rating: number}> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span className='image-wrapper' key={i}>
        <img style={{ filter: i < rating ? 'orange' : 'grayscale(100%)' }} className="star" src='/images/icons/star_icon.png' alt={`Star ${i}`} />
      </span>
    );
  }
  return <div className='stars'>{stars}</div>;
};

// Компонент для отображения продукта
const ProductCard: React.FC<{product: ProductC}> = ({ product }) => {
  const [onActive, setOnActive] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false); // состояние для обработки ошибки загрузки изображения

  // Проверяем при монтировании, есть ли товар в корзине
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]') as ProductC[];
    const productInCart = cart.some(item => item.id === product.id);
    setOnActive(productInCart);
  }, [product.id]);

  const handleButtonClick = () => {
    setOnActive(!onActive);

    // Получаем текущую корзину из localStorage
    let cart = JSON.parse(localStorage.getItem('cart') || '[]') as ProductC[];

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
      {imageError ? (
        <div className="white-square">Не найдена картинка {product.name}</div>
      ) : (
        <img
          className="product-image"
          src={String(product.imageUrl)}
          alt={product.name}
          onError={() => setImageError(true)} // Если картинка не загружается, показываем белый квадрат
        />
      )}
      <p>
        <span className="new-price">{product.newPrice.toFixed(2)} ₽</span>{' '}
        <span className="old-price">{product.oldPrice.toFixed(2)} ₽</span>
      </p>
      <p className="about-card">
        <span className="with-card">С картой</span>{' '}
        <span className="without-card">Обычная</span>
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
