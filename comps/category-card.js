import Image from "next/image";
import Link from "next/link";

import s from "../styles/main/category-card.module.scss";

const CategoryCard = ({name, link='#', imagePath }) => {
    return (  
        
            <Link className={s.link} href={link}>
                <div className={s.border}>
                <div className={s['product-card']}>
            <Image className={s.image} src={imagePath} alt='category image' width={30} height={30}></Image>
            <h1 className={s.name}>{name}</h1>
            </div>
            </div>
            </Link>
        
    );
}
 
export default CategoryCard;