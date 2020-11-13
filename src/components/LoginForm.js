import React, { useState } from "react";
import { useDispatch } from "react-redux";

import userStorage from "./../utils/userStorage";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setAuthData({ ...authData, [event.target.name]: event.target.value });
  };
  const handleClick = (event) => {
    event.preventDefault();
    if (authData.username === "Admin" && authData.password === "12345") {
      userStorage.setItem("username", "Админ");
      userStorage.setItem("role", "admin");
      dispatch({
        type: "LOGIN",
        payload: { username: "Админ", role: "admin" },
      });
    } else if (authData.username === "User" && authData.password === "12345") {
      userStorage.setItem("username", "Пользователь");
      userStorage.setItem("role", "user");
      dispatch({
        type: "LOGIN",
        payload: { username: "Пользователь", role: "user" },
      });
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-form">
      <input
        className="login-form__username"
        type="text"
        name="username"
        id="username"
        value={authData.username}
        onChange={handleChange}
        placeholder="Имя Пользователя"
      />
      <input
        className="login-form__password"
        type="password"
        name="password"
        id="password"
        value={authData.password}
        onChange={handleChange}
        placeholder="Пароль"
      />

      <input
        className="login-form__submit"
        type="submit"
        onClick={handleClick}
        value="Войти"
      />
      <div className="errorStatus">
        {error ? "Имя пользователя и/или пароль неверны" : null}
      </div>
    </div>
  );
}
