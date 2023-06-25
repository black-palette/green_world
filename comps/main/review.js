import Image from "next/image";

import s from "../../styles/main/review.module.scss";

const Review = () => {
  return (
    <div className={s.review}>
      <div className={s.metadata}>
        <Image
          className={s["user-icon"]}
          src="/logo.svg"
          alt="user icon"
          width={10}
          height={10}
        ></Image>
        <div className={s["user-info"]}>
          <p className={s.name}>Bohdan</p>
          <p className={s.date}>21.02.2023</p>
        </div>
      </div>
      <div className={s.info}>
        <p className={s.text}>Cool fertilizers!</p>

        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
      </div>
    </div>
  );
};

export default Review;
