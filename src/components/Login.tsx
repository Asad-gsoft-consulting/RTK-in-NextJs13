"use client";

import React, {useState} from "react";
import {logIn, logOut, toggleModerator} from "@/redux/features/authSlice";
import {useSelector, useDispatch} from "react-redux";
import {AppDispatch} from "@/redux/store";
import {useAppSelector} from "@/redux/store";

const Login = () => {
  const [username, setUsername] = useState();
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const dispath = useDispatch<AppDispatch>();

  const onClickLogin = () => {
    dispath(logIn(username));
  };
  const onClickLogout = () => {
    dispath(logOut());
  };
  const onClickToggle = () => {
    dispath(toggleModerator());
  };
  return (
    <div>
      <input
        className="border-2 border-blue-600 p-4 rounded-full focus:bg-blue-100"
        type="text"
        defaultValue={isAuth? "":"asad123"}
        placeholder={isAuth ? "" : "asad123"}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={onClickLogin}
      >
        Login
      </button>
      <br />
      <br />
      <button
        className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={onClickLogout}
      >
        Logout
      </button>
      <br />
      <br />
      {isAuth && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={onClickToggle}
        >
          Toggle Moderator Status
        </button>
      )}
    </div>
  );
};

export default Login;
