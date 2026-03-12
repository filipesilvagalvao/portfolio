import styles from "./Card.module.css"

type CardProps = {
    title:string,
    laptop:string,
    mobile:string,
    link:string
}

function Card({title,laptop, mobile, link}:CardProps) {
  return (
    <article className={styles.card}>
        <div className={styles.card__mockups}>
            <img src={laptop} alt="laptop" className={styles.card__laptop}/>
            <img src={mobile} alt="mobile" className={styles.card__mobile}/>
        </div>
        <h3>{title}</h3>
        <a href={link} target="_blank" className="btn">Ver projeto</a>
    </article>
  )
}

export default Card