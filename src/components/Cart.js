const getCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

const Cart = () => {
    const cart = getCart();
    return (
        <div className="cart">
            <h2>Ваша корзина</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;