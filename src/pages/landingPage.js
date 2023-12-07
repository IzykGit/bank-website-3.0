import styles from '../styles/landingPage.module.css'
import Navbar from '../components/navbar'
import Fold from '../components/fold'
import TopBar from '../components/topBar'

export default function LandingPage() {

    const headText = "Welcome To Best Bank"
    const introDescription = "At Best Bank, we take pride in being more than just a bank; we are your dedicated financial partner on the journey to achieving your dreams. With a commitment to excellence and a focus on your financial well-being, we offer a comprehensive suite of services designed to meet your unique needs."
    const buttonText = "Get Free Loan Quote"

    return (
        <div>
            <TopBar />
            <div className={styles.navAndFold}>
                <Navbar />
                <Fold headText={headText} introDescription={introDescription} buttonText={buttonText}/>
            </div>
            <div className={styles.infoCardsContainer}>
                <div className={styles.infoCard}>

                </div>
                <div className={styles.infoCard}>
                    
                </div>
                <div className={styles.infoCard}>
                    
                </div>
            </div>
        </div>
    )
}