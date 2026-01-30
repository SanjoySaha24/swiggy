import {createSlice} from "@reduxjs/toolkit"

// create cart slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[]
    },
    // reducer function
    reducers:{
        // it contains objects
        //  add
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        // remove
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) =>{
            state.items.length = 0
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;