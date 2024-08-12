import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, incrementQuantity, decrementQuantity } from './features/cart/cartSlice';
import './app.css'

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeItem(product));
  };

  const handleIncrementQuantity = (product) => {
    dispatch(incrementQuantity(product));
  };

  const handleDecrementQuantity = (product) => {
    dispatch(decrementQuantity(product));
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="App">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart ({totalItems} items)</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => handleIncrementQuantity(item)}>+</button>
            <button onClick={() => handleDecrementQuantity(item)}>-</button>
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}

export default App;