import Review from "./review"

import s from "../styles/main/review-gallery.module.scss";

const ReviewGallery = () => {
    return (  
        <div className={s.gallery}>
            <h1>Наші відгуки</h1>
            <div className={s['sub-gallery']}>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
            </div>
            
        </div>
    );
}
 
export default ReviewGallery;