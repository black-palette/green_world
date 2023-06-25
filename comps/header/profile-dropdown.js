import Link from "next/link";

import s from "../../styles/header/profile-dropdown.module.scss";

const ProfileDropdown = () => {
  return (
    <nav className={s.navbar}>
      <div className={`${s["profile-dropdown-menu"]}`}>
        <div className={`${s["navbar"]}`}>
          <Link className={`${s["item"]}`} href="#">
            Мій кабінет
          </Link>
          <Link className={`${s["item"]} `} href="#">
            Мої замовлення
          </Link>
          <Link className={`${s["item"]}`} href="#">
            Обране
          </Link>
          <Link className={`${s["item"]}`} href="#">
            Вийти
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ProfileDropdown;
