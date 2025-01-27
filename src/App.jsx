import { useState } from "react";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]); // Array of items in the cart
  const [cartCount, setCartCount] = useState(0); // Count for cart icon
  const [totalPrice, setTotalPrice] = useState(0); // Total price for the cart
  

  // Function to handle adding to cart
  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => {
      // Check if item already exists in the cart
      const existingItem = prevCartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If it exists, update the quantity and price
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If it doesn't exist, add a new item with quantity 1
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });

    setCartCount((prevCount) => prevCount + 1); // Increment cart count
    setTotalPrice((prevTotalPrice) => prevTotalPrice + item.cost); // Add item price to total
  };

  // Function to handle removing items from the cart
  const handleRemoveFromCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem && existingItem.quantity > 1) {
        // If item quantity > 1, reduce the quantity
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        // Otherwise, remove the item from the cart
        return prevCartItems.filter((cartItem) => cartItem.id !== item.id);
      }
    });

    setCartCount((prevCount) => prevCount - 1); // Decrement cart count
    setTotalPrice((prevTotalPrice) => prevTotalPrice - item.cost); // Subtract item price from total
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route
            path="/products"
            element={<Products onAddToCart={handleAddToCart} cartItems={cartItems} cartCount={cartCount} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                cartCount={cartCount}
                totalPrice={totalPrice}
                setCartItems={setCartItems}
                setCartCount={setCartCount}
                setTotalPrice={setTotalPrice}
                onRemove={handleRemoveFromCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

