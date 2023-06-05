import Image from "next/image";
import Navbar from "./navbar";

import headCss from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={headCss.header}>
      {/* <Image
        className={headCss.logo}
        src="/plant.jpg"
        alt="me"
        width="64"
        height="64"
      />
      <h1>Green World</h1>
      <input
        className={headCss.searchBar}
        type="search"
        id="gsearch"
        name="gsearch"
      /> */}

      <nav class="navbar">
        <div class="container">
          <div class="navbar-header">
            <a href="#">
              {/* <Image
              className="navbar-logo"
              src={logo}
              width={0}
              height={0}
              alt="logo"
            /> */}
              <h1>Зелений світ</h1>
            </a>
          </div>

          <div class="navbar-menu">
            <ul class="navbar-nav">
              <li class="active">
                <a href="#">Головна</a>
              </li>
              <li>
                <a href="#">Категорії</a>
              </li>
              <li>
                <a href="#">Про нас</a>
              </li>
              <li>
                <a href="#">Контакти</a>
              </li>
              <li>
                <a href="#">Увійти</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Navbar />
    </header>
  );
};

export default Header;
