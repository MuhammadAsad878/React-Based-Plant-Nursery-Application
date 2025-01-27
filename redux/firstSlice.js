// src/firstSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

const firstSlice = createSlice({
  name: 'cart', // Slice name
  initialState,
  reducers: {
    // Action to add an item to the cart
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.cartItems.push(newItem);
      state.cartCount += 1;
      state.totalPrice += newItem.cost;
    },
    // Action to remove an item from the cart
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item.id === itemId);
      if (itemIndex >= 0) {
        const item = state.cartItems[itemIndex];
        state.cartItems.splice(itemIndex, 1);
        state.cartCount -= 1;
        state.totalPrice -= item.cost;
      }
    },
    // Action to clear all items from the cart
    clearCart: (state) => {
      state.cartItems = [];
      state.cartCount = 0;
      state.totalPrice = 0;
    },
  },
});

// Export the actions to dispatch
export const { addToCart, removeFromCart, clearCart } = firstSlice.actions;

// Export the reducer to use in the store
export default firstSlice.reducer;
