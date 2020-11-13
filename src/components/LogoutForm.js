import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import userStorage from "./../utils/userStorage";

export default function LogoutForm() {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    userStorage.setItem("username", "Гость");
    userStorage.setItem("role", "guest");
    dispatch({ type: "LOGOUT" });
  }, [dispatch]);
  return (
    <div className="logout-form">
      <button onClick={handleClick}>Выйти</button>
    </div>
  );
}
