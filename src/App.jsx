import { useState } from 'react';
import './App.css';

function App() {
  const [availableItems, setAvailableItems] = useState([
    {
      id: 1,
      name: "Black T shirt",
      price: 5
    },
    {
      id: 2,
      name: "Hanger Set",
      price: 8
    },
    {
      id: 3,
      name: "Thoub",
      price: 12
    },
    {
      id: 4,
      name: "Computer Bag",
      price: 20
    },
    {
      id: 5,
      name: "Couch",
      price: 50
    },
    {
      id: 6,
      name: "Gaming Chair",
      price: 70
    }
  ]);

  const [shoppingCart, setShoppingCart] = useState([]);
  const [availableBalance, setAvailableBalance] = useState(100);
  const [warningMessage, setWarningMessage] = useState(null);

  const handleAddToCart = (item) => {
    if (availableBalance >= item.price) {
      setAvailableBalance(availableBalance - item.price);
      setAvailableItems(availableItems.filter((i) => i.id !== item.id));
      setShoppingCart([...shoppingCart, item]);
      setWarningMessage(null);
    } else {
      setWarningMessage("Insufficient funds. Your balance is too low to purchase this item");
    }
  };

  const handleRemoveFromShoppingCart = (item) => {
    setShoppingCart(shoppingCart.filter((i) => i.id !== item.id));
    setAvailableItems([...availableItems, item]);
    setAvailableBalance(availableBalance + item.price);
  };

  return (
    <div>
      <h1>Sayed Hameds Closet</h1>

      <h2>Your Balance: {availableBalance}</h2>

      {warningMessage && <p>{warningMessage}</p>}

      <h2>Available Items</h2>
      {availableItems.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => { handleAddToCart(item); }}>Add to Cart</button>
        </div>
      ))}

      <h2>Shopping Cart</h2>
      {shoppingCart.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => { handleRemoveFromShoppingCart(item); }}>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
}

export default App;
