import Image from "next/image";
import Navbar from "./navbar";

import headCss from "../styles/header.module.css";
import logo from "./../public/plant.jpg";

const Header = () => {
  return (
    <header className={headCss.header}>
      <nav class="navbar">
        <div class="container">
          <div class="navbar-header">
            <a href="#">
              <Image
                className="navbar-logo"
                src={logo}
                width={10}
                height={10}
                alt="logo"
              />
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
