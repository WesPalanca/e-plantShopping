import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

            // Check if the item already exists in the cart
            const existingItem = state.items.find(item => item.name === name);

            if (existingItem) {
                // Increase quantity if the item already exists
                existingItem.quantity++;
            } else {
                // Add new item with quantity 1
                state.items.push({ name, image, cost, quantity: 1 });
            }
    
    },
    removeItem: (state, action) => {
       const { name } = action.payload;

            // Remove the item matching the given name
            state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
       const { name, quantity } = action.payload;

            // Find the item matching the given name
            const itemToUpdate = state.items.find(item => item.name === name);

            if (itemToUpdate) {
                // Update the item's quantity
                itemToUpdate.quantity = quantity;
            }

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
