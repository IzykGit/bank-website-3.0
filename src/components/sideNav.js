import styles from '../styles/components/sideNav.module.css'

export default function SideNav() {
    return(
        <div style={{backgroundColor: "#292929"}}>
            <nav className={styles.sideNav}>
                <ul className={styles.sideNav_pages}>
                    <li>Loans</li>
                    <li>Home Loans</li>
                    <li>Cards</li>
                    <li>Credit Services</li>
                    <li>Sign Up</li>
                    <li>Log In</li>
                </ul>
                <ul className={styles.sideNav_accountType}>
                    <li>Personal</li>
                    <li>Business</li>
                    <li>Commercial</li>
                </ul>
            </nav>
        </div>
    )
}