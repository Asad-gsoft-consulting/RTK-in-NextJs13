import {configureStore} from "@reduxjs/toolkit";
import authReducer from "@/redux/features/authSlice";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import counterReducer from "@/redux/features/counterSlice";
export const store = configureStore({
  reducer: {

    // cars: CarSlice.reducer    Actul concept behind this 
    authReducer,
     counterReducer},
  devTools: process.env.NODE_ENV !== "production",
});

// TypeScript only 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
