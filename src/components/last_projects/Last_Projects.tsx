import Card from "../card/Card"
import styles from "./Last_Projects.module.css"

function Last_Projects() {
  return (
    <section className={styles.last_projects} id="last_projects">
      <h2 className={styles.last_projects__title}>Projetos recentes</h2>
      <div className={styles.last_projects__container}>
        <Card
          title="Carlos Personal"
          laptop="/mockup_devices/carlos_personal/laptop.png"
          mobile="/mockup_devices/carlos_personal/mobile.png"
          link="https://www.carlospersonal.com.br/"
        />

        <Card
          title="Marcos Matheus Fotógrafias"
          laptop="/mockup_devices/marcos_matheus/laptop.png"
          mobile="/mockup_devices/marcos_matheus/mobile.png"
          link="https://www.marcosmatheusfotografias.com.br/"
        />
        
        <Card
          title="Letícia Barcelo Estética"
          laptop="/mockup_devices/leticia_barcelos/laptop.png"
          mobile="/mockup_devices/leticia_barcelos/mobile.png"
          link="https://leticia-barcelos.vercel.app/"
        />

        <Card
          title="Catálogo de Tênis"
          laptop="/mockup_devices/loja_tenis/laptop.png"
          mobile="/mockup_devices/loja_tenis/mobile.png"
          link="https://landing-page-tenis-cjkg.vercel.app/"
        />
      </div>
    </section>
  )
}

export default Last_Projects