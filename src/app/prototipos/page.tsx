import Card from '@/components/card/Card'
import styles from './Prototipos.module.css'

function page() {
    return (
        <main className={styles.prototipos}>
            <h1 className={styles.prototipos__title}>Protótipos</h1>
            <div className={styles.prototipos__container}>
                <Card
                    title='WowTV'
                    laptop="/mockup_devices/wowtv/laptop.png"
                    mobile="/mockup_devices/wowtv/mobile.png"
                    link='https://www.wowtv.com.br/'
                />
            </div>
        </main>
    )
}

export default page