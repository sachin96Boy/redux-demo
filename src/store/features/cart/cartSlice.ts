import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../../cartItems';

// import type { PayloadAction } from '@reduxjs/toolkit'

interface cartState {
    cartItems: { id: string; title: string; price: string; img: string; amount: number; }[];
    amount: number;
    total: number;
    isLoading: boolean;
}

const initialState: cartState = {
    cartItems: cartItems,
    amount: cartItems.length,
    total: 0,
    isLoading: true
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {

    }
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default cartSlice.reducer