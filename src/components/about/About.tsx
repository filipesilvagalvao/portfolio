import Carousel_Loop from "../carousel_loop/Carousel_Loop"
import TextType from "../typer/Typer"
import styles from "./About.module.css"

function About() {
    return (
        <section className={styles.about} id="about">
            <h2 className={styles.about__title}>Sobre mim</h2>
            
            <div className={styles.about__container}>

                <img
                    src="/photos/foto-filipe-1.png"
                    alt="foto de filipe"
                    className={styles.about__photo}
                />
                <div className={styles.about__textContent}>

                    <p>Olá, meu nome é Filipe, trabalho desenvolvimento web há mais de 5 anos. Contruo desde o layout, a lógica, funções e SEO. Crio landingpages, lojas online, blogs e sistemas web e otimizo seu perfil no google. Tecnologias em que trabalho:</p>

                    <TextType text={["HTML, CSS & JS", "React JS", "Next JS", "WordPress"]} className={styles.about__textDinamic}/><br />
                    <a href="#last_projects" className="btn">Projeto recentes</a>
                </div>
            </div>
            <Carousel_Loop/>
        </section>
    )
}

export default About