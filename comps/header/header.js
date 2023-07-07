import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "./logo";
import SeacrhBar from "./search-bar";
import ProfileDropdown from "./profile-dropdown";

import s from "../../styles/header/header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={`${s["search-bar"]}`}>
        <SeacrhBar />
      </div>
      <div className={`${s["profile-dropdown-menu"]}`}>
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Header;
