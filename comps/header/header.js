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
      <Logo />
      <SeacrhBar />
      <ProfileDropdown />
    </header>
  );
};

export default Header;
