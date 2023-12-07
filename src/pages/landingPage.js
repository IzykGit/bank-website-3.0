import styles from '../styles/landingPage.module.css'
import Navbar from '../components/navbar'
import Fold from '../components/fold'
import TopBar from '../components/topBar'

export default function LandingPage() {
    return (
        <div>
            <TopBar />
            <div className={styles.navAndFold}>
                <Navbar />
                <Fold />
            </div>
        </div>
    )
}