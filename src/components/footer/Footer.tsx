import styles from "./Footer.module.css"

function Footer() {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__container}>
            <p className={styles.footer__logo}>Filipe DEV</p>
            <p>&copy; Todos os direito reservados - {year}</p>
        </div>
    </footer>
  )
}

export default Footer