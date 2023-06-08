import Image from "next/image";

import s from "../styles/footer/footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={s.footer}>
        
        <div className={s['work-time']}>
        <h1>Коли ми працюємо?</h1>
        <Image className={s.clock} src='/footer/clock.svg' alt='clock' width={5} height={5}/>
        <div className={s.times}>
        <p>Пн: з 8:00 - 17:00</p>
        <p>Вт-Пт: 8:00 - 18:00</p>
        <p>Сб: 8:00 - 16:00</p>
        <p>Нд: Вихідний</p>
        </div>
      </div>
      
      <div className={s.contacts}>
        <h1>Як з нами зв'язатись?</h1>
        
        <div className={s.test}>
        <div className={s.phone}>
        <Image className={s.image} src='/footer/phone.svg' alt="phone number" width={5} height={5}/><p>+30506041058</p>
        </div>
        <div className={s.mail}>
        <Image className={s.image} src='/footer/mail.svg' alt="mail" width={5} height={5}/><p>bohdanbuchok@gmail.com</p>
        </div>
        <div className={s.map}>
        <Image className={s.image} src='/footer/map-pin.svg' alt="map pin" width={5} height={5}/><p>Vinnytsia, Zamostyanka st. 9, 145</p>
        </div>
        </div>        
      </div>

      
      <div className={s['google-map']}>
      <h1>Де нас знайти?</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41503.63579534659!2d28.492456474575008!3d49.44714723276756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d156d2f7d8293%3A0x71c0e196b3ed0ac7!2sPoint%20of%20Invincibility!5e0!3m2!1sen!2sua!4v1686229918593!5m2!1sen!2sua" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
      
      </div>
    </footer>
  );
};

export default Footer;



