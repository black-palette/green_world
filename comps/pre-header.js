import Link from "next/link"
import s from "../styles/pre-header.module.scss";

const PreHeader = () => {
    return (  
        <div className={s['pre-header']}>
            
        <Link className={s.link}link href='#'>Купуй Вигідніше! Діє спеціальна пропозиція на сульфат магнія! </Link>
        </div>
    );
}
 
export default PreHeader;