import styles from "./Carousel_Loop.module.css"

function Carousel_Loop() {
    return (
        <div className={styles.carousel}>

            <div className={styles.group}>

                <div className={styles.card}>
                    <img src="/tecnology/html.png" alt="html" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/css.png" alt="css" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/js.png" alt="js" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/reactjs.png" alt="reactjs" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/nextjs.png" alt="nextjs" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/wordpress.png" alt="wordpress" />
                </div>

            </div>

            <div className={styles.group} aria-hidden>
                <div className={styles.card}>
                    <img src="/tecnology/html.png" alt="html" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/css.png" alt="css" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/js.png" alt="js" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/reactjs.png" alt="reactjs" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/nextjs.png" alt="nextjs" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/wordpress.png" alt="wordpress" />
                </div>
            </div>
            
            <div className={styles.group} aria-hidden>
                <div className={styles.card}>
                    <img src="/tecnology/html.png" alt="html" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/css.png" alt="css" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/js.png" alt="js" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/reactjs.png" alt="reactjs" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/nextjs.png" alt="nextjs" />
                </div>
                <div className={styles.card}>
                    <img src="/tecnology/wordpress.png" alt="wordpress" />
                </div>
            </div>

        </div>
    )
}

export default Carousel_Loop