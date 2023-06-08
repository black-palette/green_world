import Image from "next/image";
import Link from "next/link";

import s from "../styles/main/category-card.module.scss";

const CategoryCard = ({ name, link = "#", imagePath }) => {
  return (
    <div className={s.card}>
      <Image
        className={s.image}
        src={imagePath}
        alt="category image"
        width={30}
        height={30}
      ></Image>
      <div className={s["sub-card"]}>
        <p className={s.name}>
          <a href="#">{name}</a>
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
