import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import "./Cart.css"
const getCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};
function Cart() {
    const cart = getCart();
    return (
        <div className="content">
            <Breadcrumb/>
            <h1 className="cart__title">Корзина</h1>
            <div className="cart__content">
                {cart.map(product => (
                 <div className="cart-product-card">
                    <img className="cart-product-image" src={product.imageUrl} alt={product.name} />
                    <p className="cart-product-name">{product.name}</p>
                    <p>
                        <span className="cart-new-price">{parseFloat(product.newPrice).toFixed(2)} ₽</span>
                        <span className="cart-old-price">{parseFloat(product.oldPrice).toFixed(2)} ₽</span>
                    </p>
                    <p>
                        <span className="cart-with-card">{parseFloat(product.newPrice).toFixed(2)} ₽</span>
                        <span className="cart-without-card">{parseFloat(product.oldPrice).toFixed(2)} ₽</span>
                    </p>
                    <p>{product.count ? product.count : 0}шт.</p>
                 </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
