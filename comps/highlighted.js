import s from "../styles/highlighted.module.scss";


const Highlighted = () => {
    return (  
        <>
        <div className={s.card}>
	<h1 className={s['entry-title']}>
    <a href="http://www.ariona.net">This text will be highlighted when hovered</a>
    </h1>
        </div>
        </>
    );
}
 
export default Highlighted;