import styles from '../styles/components/navbar.module.css'

export default function Navbar() {
    return (
        <div>
            <div className={styles.topBar}>
                <div>
                    <p>Best Bank</p>
                </div>
            </div>
            <nav className={styles.navbar}>
                <ul className={styles.pages}>
                    <li>Loans</li>
                    <li>Home Loans</li>
                    <li>Cards</li>
                    <li>Credit Services</li>
                    <li>Sign Up</li>
                    <li>Log In</li>
                </ul>
                <ul className={styles.accountType}>
                    <li>Personal</li>
                    <li>Business</li>
                    <li>Commercial</li>
                </ul>
            </nav>
        </div>
    )
}