import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        shipping_fee:250,
        total:0
    },
    reducers:{
        //mutating the state here
        additem:(state,action) => {
            state.items.push(action.payload);
            state.total += action.payload.price
        },
        removeItem:(state,action)=>{
            const itemToDelete = state.items.findIndex(item => item.id == action.payload.id);
            state.items.splice(itemToDelete, 1);
            state.total -= action.payload.price
        },
        clearCart:(state,action)=>{
            state.items.length = 0;
            state.total = 0
        }
    }
});

// export the actions
export const {additem,removeItem,clearCart} = cartSlice.actions;

//export the reducers
export default cartSlice.reducer;