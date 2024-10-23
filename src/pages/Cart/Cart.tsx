import React, { useState, useEffect } from 'react';
import "./Cart.scss"
import ProductC from '../../classes/ProductC';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
const getCart = (): ProductC[] => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

const Cart: React.FC = () => {
    const [cart, setCart] = useState<ProductC[]>([]);

    useEffect(() => {
        const cartFromStorage = getCart();
        setCart(cartFromStorage);
    }, []);

    return (
        <div className="content">
            <Breadcrumb/>
            <h1 className="cart__title">Корзина</h1>
            <div className="cart__content">
                {cart.map((product: ProductC) => (
                    <section key={product.id} className="cart-product-card">
                        <img className="cart-product-image" src={String(product.imageUrl)} alt={product.name} />
                        <p className="cart-product-name">{product.name}</p>
                        <p>
                            <span className="cart-new-price">{product.newPrice} ₽</span>
                            <span className="cart-old-price">{product.oldPrice} ₽</span>
                        </p>
                        <p>
                            <span className="cart-with-card">{product.newPrice} ₽</span>
                            <span className="cart-without-card">{product.oldPrice} ₽</span>
                        </p>
                        <div className="cart-product-counter">
                            <button
                                className="cart-product-counter__button"
                                onClick={() => {
                                    const newCart = cart.map((item: ProductC) => {
                                        if (item.id === product.id) {
                                            return { ...item, count: (item.count || 0) + 1 };
                                        }
                                        return item;
                                    });
                                    localStorage.setItem('cart', JSON.stringify(newCart));
                                    setCart(newCart); // Update the state
                                }}
                            >
                                +
                            </button>
                            <p className="cart-product-counter__count">
                                {cart.find((item) => item.id === product.id)?.count || 0} шт.
                            </p>
                            <button
                                className="cart-product-counter__button"
                                onClick={() => {
                                    if (cart.find((item) => item.id === product.id)?.count === 1) {
                                        const newCart = cart.filter((item) => item.id !== product.id);
                                        localStorage.setItem('cart', JSON.stringify(newCart));
                                        setCart(newCart); // Update the state
                                    } else {
                                        const newCart = cart.map((item: ProductC) => {
                                            if (item.id === product.id) {
                                                return { ...item, count: item.count - 1 };
                                            }
                                            return item;
                                        });
                                        localStorage.setItem('cart', JSON.stringify(newCart));
                                        setCart(newCart); // Update the state
                                    }
                                }}
                            >
                                -
                            </button>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Cart;
