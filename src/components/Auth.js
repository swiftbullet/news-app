import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import LogoutForm from "./LogoutForm";

export default function Auth() {
  const currentUser = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className="current-user"
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        Привет, {currentUser.username}
      </div>
      {isOpen ? (
        currentUser.role === "guest" ? (
          <LoginForm />
        ) : (
          <LogoutForm />
        )
      ) : null}
    </div>
  );
}
