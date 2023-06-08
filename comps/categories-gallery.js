import CategoryCard from "./category-card";

import s from "../styles/main/categories-gallery.module.scss";

const CategoriesGallery = () => {
    return (  
        
<div className={s.gallery}>
    <h1 className={s.categories}>Categories</h1>
    
    <div className={s['sub-gallery']}>
        <div className={s.first}>
            <CategoryCard name='chemie' imagePath='/categories/flask.svg'/>
        <CategoryCard name='chemie' imagePath='/categories/flask.svg'/>
        <CategoryCard name='chemie' imagePath='/categories/flask.svg'/>
        <CategoryCard name='chemie' imagePath='/categories/flask.svg'/>
        <CategoryCard name='chemie' imagePath='/categories/flask.svg'/>
        </div>
            
        <div className={s.second}>
        <CategoryCard name='plant care' imagePath='/categories/potted-plant.svg'/>
        <CategoryCard name='for dogs' imagePath='/categories/dog.svg'/>
        <CategoryCard name='for cats' imagePath='/categories/cat.svg'/>
        <CategoryCard name='chemie' imagePath='/categories/flask.svg'/>
        <CategoryCard name='seeds' imagePath='/categories/seeding.svg'/>
        </div>
        </div>
        
        </div>
        
    );
}
 
export default CategoriesGallery;