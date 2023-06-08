import s from "/styles/test.module.scss"

const Test = () => {
    return (
        <div className={s.body}>
<h1 class={s.heading}>Look At This <span class={s['underline--magical']}>Pretty</span> Underline</h1>
<h2 class={s.subheading}>Wow this one  is super incredibly cool, and this <span class={s['underline--magical']}>one is on Multiple Lines!</span> I wish I had found this like thirty projects ago when I was representing the lollipop guild.</h2>

        </div>
        
        
      );
}
 
export default Test;