import styles from '../styles/components/topBar.module.css'

export default function TopBar() {

    function openSideNav() {
        const hamburger = document.getElementById('hamburger');
        console.log('Hamburger element:', hamburger);
      
        const bar1 = hamburger.querySelector('div:nth-child(1)');
        console.log('Selected bar1 element:', bar1);

        const bar2 = hamburger.querySelector('div:nth-child(2)')

        const bar3 = hamburger.querySelector('div:nth-child(3)')
      
        bar1.classList.toggle(styles.barTransformOne);
        bar2.classList.toggle(styles.barTransformTwo);
        bar3.classList.toggle(styles.barTransformThree);
        console.log("Opening hamburger");


        document.getElementById('sideNav').classList.toggle(styles.openedSideNav)
        console.log(document.getElementById("sideNav").classList.contains("openedSideNav"))
      }
      
    

    return (
        <div className={styles.topBar}>
            <div className={styles.topBarSecond}>
                <div className={styles.title}>
                    <p>Best Bank</p>
                </div>
                <div onClick={openSideNav} id="hamburger" className={styles.hamburger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <nav id='sideNav' className={styles.sideNav}>
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