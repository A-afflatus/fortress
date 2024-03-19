import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from '@/redux/store';
import { COUNTER } from '@/redux/constant';
interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: COUNTER,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectCount = (state: RootState) => state.COUNTER.value

export default counterSlice.reducer


