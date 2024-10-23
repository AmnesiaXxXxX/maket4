import { useState, useEffect }from 'react';
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
  {
    id: 5,
    count: 1,
    name: 'Хлеб Бородинский, 400г',
    oldPrice: 35.00,
    newPrice: 31.50,
    discount: 10,
    imageUrl: '/images/products/bread.png',
    rating: 4,
  },
  {
    id: 6,
    count: 1,
    name: 'Сыр Голландский, 200г',
    oldPrice: 150.00,
    newPrice: 135.00,
    discount: 10,
    imageUrl: '/images/products/cheese.png',
    rating: 5,
  },
  {
    id: 7,
    count: 1,
    name: 'Масло сливочное "Крестьянское" 72.5%, 180г',
    oldPrice: 100.00,
    newPrice: 90.00,
    discount: 10,
    imageUrl: '/images/products/butter.png',
    rating: 4,
  },
  {
    id: 8,
    count: 1,
    name: 'Яйца куриные С0, 10 шт',
    oldPrice: 60.00,
    newPrice: 54.00,
    discount: 10,
    imageUrl: '/images/products/eggs.png',
    rating: 5,
  },
  {
    id: 9,
    count: 1,
    name: 'Кефир 1%, 1л',
    oldPrice: 50.00,
    newPrice: 45.00,
    discount: 10,
    imageUrl: '/images/products/kefir.png',
    rating: 3,
  },
  {
    id: 10,
    count: 1,
    name: 'Сметана 15%, 200г',
    oldPrice: 45.00,
    newPrice: 40.50,
    discount: 10,
    imageUrl: '/images/products/smetana.png',
    rating: 4,
  },
  {
    id: 11,
    count: 1,
    name: 'Йогурт клубничный, 125г',
    oldPrice: 25.00,
    newPrice: 22.50,
    discount: 10,
    imageUrl: '/images/products/yogurt.png',
    rating: 5,
  },
  {
    id: 12,
    count: 1,
    name: 'Сок апельсиновый, 1л',
    oldPrice: 80.00,
    newPrice: 72.00,
    discount: 10,
    imageUrl: '/images/products/juice.png',
    rating: 4,
  },
  {
    id: 13,
    count: 1,
    name: 'Мука пшеничная высший сорт, 2кг',
    oldPrice: 70.00,
    newPrice: 63.00,
    discount: 10,
    imageUrl: '/images/products/flour.png',
    rating: 5,
  },
  {
    id: 14,
    count: 1,
    name: 'Сахар-песок, 1кг',
    oldPrice: 40.00,
    newPrice: 36.00,
    discount: 10,
    imageUrl: '/images/products/sugar.png',
    rating: 4,
  },
  {
    id: 15,
    count: 1,
    name: 'Чай черный листовой, 100г',
    oldPrice: 90.00,
    newPrice: 81.00,
    discount: 10,
    imageUrl: '/images/products/tea.png',
    rating: 5,
  },
  {
    id: 16,
    count: 1,
    name: 'Кофе растворимый, 95г',
    oldPrice: 150.00,
    newPrice: 135.00,
    discount: 10,
    imageUrl: '/images/products/coffee.png',
    rating: 4,
  },
  {
    id: 17,
    count: 1,
    name: 'Шоколад молочный, 90г',
    oldPrice: 70.00,
    newPrice: 63.00,
    discount: 10,
    imageUrl: '/images/products/chocolate.png',
    rating: 5,
  },
  {
    id: 18,
    count: 1,
    name: 'Печенье овсяное, 300г',
    oldPrice: 55.00,
    newPrice: 49.50,
    discount: 10,
    imageUrl: '/images/products/cookies.png',
    rating: 3,
  },
  {
    id: 19,
    count: 1,
    name: 'Макароны рожки, 450г',
    oldPrice: 45.00,
    newPrice: 40.50,
    discount: 10,
    imageUrl: '/images/products/pasta.png',
    rating: 4,
  },
  {
    id: 20,
    count: 1,
    name: 'Рис длиннозерный, 900г',
    oldPrice: 80.00,
    newPrice: 72.00,
    discount: 10,
    imageUrl: '/images/products/rice.png',
    rating: 5,
  },
  {
    id: 21,
    count: 1,
    name: 'Гречка ядрица, 800г',
    oldPrice: 70.00,
    newPrice: 63.00,
    discount: 10,
    imageUrl: '/images/products/buckwheat.png',
    rating: 5,
  },
  {
    id: 22,
    count: 1,
    name: 'Масло подсолнечное рафинированное, 1л',
    oldPrice: 90.00,
    newPrice: 81.00,
    discount: 10,
    imageUrl: '/images/products/oil.png',
    rating: 4,
  },
  {
    id: 23,
    count: 1,
    name: 'Томаты свежие, 1кг',
    oldPrice: 100.00,
    newPrice: 90.00,
    discount: 10,
    imageUrl: '/images/products/tomatoes.png',
    rating: 5,
  },
  {
    id: 24,
    count: 1,
    name: 'Огурцы свежие, 1кг',
    oldPrice: 80.00,
    newPrice: 72.00,
    discount: 10,
    imageUrl: '/images/products/cucumbers.png',
    rating: 4,
  },
];


const Home: React.FC = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth <= 768);

        useEffect(() => {
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
    <div className="home">
      <img className="home__ad-image" src={ isMobileDevice ? "../../images/ad768.png" : "../../images/ad1440.png"} alt="" />
      <div className="home__promotions">
        <h2 className="home__promotions-title">Акции</h2>
        <div className="home__promotions-grid"> 
          {products
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
            .map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
        <br/><br/>
        <h2 className="home__promotions-title">Новинки</h2>
        <div className="home__promotions-grid"> 
          {products
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
            .map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
        <br/><br/>
        <h2 className="home__promotions-title">Покупали раньше</h2>
        <div className="home__promotions-grid"> 
          {products
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
            .map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
        <br/><br/>
      </div>
    </div>
  );
};

export default Home;