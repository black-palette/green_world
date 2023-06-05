import Image from "next/image";
import Link from "next/link";
// import navCss from "../styles/navbar.module.css";
import logo from "../public/plant.jpg";

const Navbar = () => {
  return (
    // <nav className={navCssk.navbar}>
    //   <Link href="/" className={navCss.link}>
    //     LINK 1
    //   </Link>
    //   <Link href="/" className={navCss.link}>
    //     LINK 2
    //   </Link>
    //   <Link href="/" className={navCss.link}>
    //     LINK 3
    //   </Link>
    // </nav>

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
