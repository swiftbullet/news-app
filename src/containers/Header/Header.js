import React from "react";
import Logo from "../../components/Logo";
import NavMenu from "../../components/NavMenu";
import Search from "../../components/Search";
import Auth from "../../components/Auth";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <NavMenu />
      <Search />
      <Auth />
    </header>
  );
}
