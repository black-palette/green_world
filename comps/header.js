import Link from "next/link";
import Image from 'next/image'

import s from "../styles/header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
    <div className={s.header}>
    <Image className={s.menu} src='/menu.svg' alt="logo" width={30} height={30}/>
      <div className={s['header-head']}>
      
        <Image className={s.logo} src='/logo.svg' alt="logo" width={30} height={30}/>
        <Link href='#'>
          <h1>Зелений світ</h1>
        </Link>
        <form className={s['search-form']} action='' method="">
        <input type='search' name='search' placeholder="Знайти товар..."></input>
        <button type='submit'><img src='/search.svg'></img></button>
        </form>
        
      </div>
  
      <nav className={s.navbar}>
        <Link className={s.link} href="#">
        <Image src='/shopping-cart.svg' alt="shopping cart icon" width={50} height={50}></Image>
        </Link>
        <Link className={s.link} href="#">
        <Image src='/user.svg' alt="profile icon" width={50} height={50}></Image>
        </Link>
      </nav>
    </div>
  </header>
  
  );
};

export default Header;






