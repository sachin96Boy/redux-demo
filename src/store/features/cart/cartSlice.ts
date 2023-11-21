import { createSlice } from '@reduxjs/toolkit'

// import type { PayloadAction } from '@reduxjs/toolkit'

interface cartState {
    cartItems: [];
    amount: number;
    total: number;
    isLoading: boolean;
}

const initialState: cartState = {
    cartItems: [],
    amount: 0,
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