'use client'
import React from 'react'
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "@/redux/features/counterSlice";
import {useSelector, useDispatch} from "react-redux";
import { AppDispatch } from "@/redux/store";
import {useAppSelector} from "@/redux/store";

const Counter = ():JSX.Element => {
    const count = useAppSelector((state) => state.counterReducer.value);
    const dispatch = useDispatch<AppDispatch>();
  return (
    <div style={{marginBottom: "4rem", textAlign: "center"}}>
      <h1 style={{marginBottom: 16}}>{count}</h1>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => dispatch(decrement())}
        style={{marginInline: 16}}
      >
        decrement
      </button>
      <button
        className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => dispatch(reset())}
      >
        reset
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-3 rounded-full"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        increment by amount
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => dispatch(decrementByAmount(5))}
      >
        Decrement by amount
      </button>
    </div>
  );
}

export default Counter
