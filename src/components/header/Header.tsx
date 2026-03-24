import Link from 'next/link'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.header__container}>
            <h1 className={styles.header__logo}><Link href="/">Filipe DEV</Link></h1>

            <input type="checkbox" id="hamburguer" className={styles.header__checkbox}/>
            <label htmlFor="hamburguer" className={styles.header__label}>
                <span></span>
                <span></span>
                <span></span>
            </label>

            <nav className={styles.header__nav}>
                <Link href="/">Home</Link>
                <Link href="/#about">Sobre</Link>
                <Link href="/#last_projects">Projetos recentes</Link>
                <Link href="/prototipos">Protótipos</Link>
                <div className={styles.header__social}>
                    <a href="https://wa.me/+5537998743132?text=Ol%C3%A1%20Filipe%2C%20vim%20do%20seu%20portf%C3%B3lio.%20Tenho%20interesse%20em%20um%20projeto" target='_blank'><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/filipesilvagalvaoo/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://github.com/filipesilvagalvao" target='_blank'><i className="fa-brands fa-github"></i></a>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header