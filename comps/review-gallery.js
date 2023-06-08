import Review from "./review";

import s from "../styles/main/review-gallery.module.scss";

const ReviewGallery = () => {
  return (
    <div className={s.gallery}>
      <h1 className={`${s.heading} ${s["underline-magical"]}`}>Наші відгуки</h1>
      <div className={s["sub-gallery"]}>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default ReviewGallery;
