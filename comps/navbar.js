import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="container">
        <div class="navbar-menu">
          <ul class="navbar-nav">
            <li class="active">
              <a href="#">Посилання1</a>
            </li>
            <li>
              <a href="#">Посилання2</a>
            </li>
            <li>
              <a href="#">Посилання3</a>
            </li>
            <li>
              <a href="#">Посилання4</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <div class="navbar-menu">
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
              <a href="#">Signin</a>
            </li>
          </ul>
        </div> */
}
