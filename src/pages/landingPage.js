import styles from '../styles/landingPage.module.css'
import Navbar from '../components/navbar'
import Fold from '../components/fold'
import TopBar from '../components/topBar'
import laptopGraph from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-3/src/assets/laptopGraph.jpg'
import bankFront from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-3/src/assets/bankFront.jpg'
import phoneMoney from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-3/src/assets/phoneMoney.jpg'
import cardOnLaptop from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-3/src/assets/cardOnLaptop.jpg'

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
                        <div className={styles.cardText}>
                            <p>Seamless Online Banking Experience:</p>
                            <p>Experience the convenience of banking at your fingertips with our secure and user-friendly online banking platform.
                            Manage your accounts, track transactions, and stay in control of your finances 24/7 from the comfort of your home or on the go.</p>
                            <button>View Account</button>
                        </div>
                    <img alt="graph on laptop" src={laptopGraph}/>
                </div>
                <div className={styles.infoCard}>
                        <div className={styles.cardText}>
                            <p>Knowledge is Power</p>
                            <p>Knowledge empowers. Explore our collection of educational resources and articles to enhance your financial literacy.
                            Best Bank is dedicated to ensuring that you have the tools and information you need to make sound financial decisions.</p>
                            <button>Explore Resources</button>
                        </div>
                    <img alt="front of bank" src={bankFront}/>
                </div>
                <div className={styles.infoCard}>
                        <div className={styles.cardText}>
                            <p>We Offer 5% APY</p>
                            <p>Introducing Best Bank's High-Yield Savings Account, offering an impressive 5% Annual Percentage Yield (APY).
                            At Best Bank, we believe in helping you maximize the growth of your hard-earned money while providing a secure and reliable banking experience.</p>
                            <button>Get Quote</button>
                        </div>
                    <img alt="phone with money symbol" src={phoneMoney} />
                </div>
            </div>
            <div className={styles.mainCardOptionContainer}>
                <div className={styles.secondaryCardOptionContainer}>
                    <p><span style={{color: "#47769E", backgroundColor: "white"}}>Explore</span> our Most Popular card options!</p>
                        <div className={styles.cardOption}>
                            <p>Cashback Credit Card:</p>
                            <p>Earn while you spend! Introducing our Cashback Credit Card – get a percentage of your purchases back in cash rewards.
                            Enjoy the simplicity of straightforward benefits with every swipe.</p>
                            <button>More Info</button>
                        </div>
                        <div className={styles.cardOption}>
                            <p>Travel Rewards Credit Card:</p>
                            <p>Explore the world with our Travel Rewards Credit Card! Earn points on every purchase,
                            redeemable for exciting travel perks such as airline miles, hotel stays, and more. Your passport to a world of possibilities awaits.</p>
                            <button>More Info</button>
                        </div>
                        <div className={styles.cardOption}>
                            <p>Credit Builder Credit Card:</p>
                            <p>"Build a brighter financial future with our Credit Builder Credit Card.
                            Designed to help you establish or improve your credit history, this card is your key to unlocking better financial opportunities."</p>
                            <button>More Info</button>
                        </div>
                        <img alt="visa card on laptop" src={cardOnLaptop} className={styles.cardOptions}/>                  
                    </div>
            </div>
        </div>
    )
}