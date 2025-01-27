import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice: 0,
  cartCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.cartCount += 1;
      state.totalPrice += action.payload.cost;
    },
    incrementItem: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.cartCount += 1;
        state.totalPrice += item.cost;
      }
    },
    decrementItem: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        state.cartCount -= 1;
        state.totalPrice -= item.cost;
        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload);
        }
      }
    },
    removeItem: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        state.cartCount -= item.quantity;
        state.totalPrice -= item.quantity * item.cost;
        state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, incrementItem, decrementItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
