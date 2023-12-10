import styles from '../styles/components/topBar.module.css'

export default function TopBar() {

    

    return (
        <div className={styles.topBar}>
            <div className={styles.topBarSecond}>
                <div className={styles.title}>
                    <p>Best Bank</p>
                </div>
                <div className={styles.hamburger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
    )
}