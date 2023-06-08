import Image from "next/image";
import Link from "next/link";

import s from "../styles/main/category-card.module.scss";

const CategoryCard = ({ name, link = "#", imagePath }) => {
  return (
    <div className={s.card}>
      <Link className={s.link} href={link}>
        <div className={s["sub-card"]}>
          <Image
            className={s.image}
            src={imagePath}
            alt="category image"
            width={30}
            height={30}
          ></Image>
          <div className={s.nm}>
            <a className={s.name}>{name}</a>
          </div>
        </div>
      </Link>
    </div>

    //         <div className={s.card}>
    // <h1 className={s['entry-title']}>
    // <a href="http://www.ariona.net">This text will be highlighted when hovered</a>
    // </h1>
    //     </div>
  );
};

export default CategoryCard;
