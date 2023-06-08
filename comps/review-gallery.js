import Review from "./review"

import s from "../styles/main/review-gallery.module.scss";

const ReviewGallery = () => {
    return (  
        <div className={s.gallery}>
            <Review className={s.review}/>
            <Review className={s.review}/>
            <Review className={s.review}/>
            <Review className={s.review}/>
            <Review className={s.review}/>
        </div>
    );
}
 
export default ReviewGallery;