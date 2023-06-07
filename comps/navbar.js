import Image from "next/image";
import Link from "next/link";

import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-list']}>
          <Link className={styles.link} href='#'>Акції</Link>
          <Link className={styles.link} href='#'>Добрива</Link>
          <Link className={styles.link} href='#'>Для Собак</Link>
          <Link className={styles.link} href='#'>Для Котів</Link>
          <Link className={styles.link} href='#'>Новинки</Link>
          <Link className={styles.link} href='#'>Бренди</Link>
          
        </div>
    </nav>
  );
};

export default Navbar;
