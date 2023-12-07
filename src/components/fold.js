import styles from '../styles/components/fold.module.css'

export default function Fold(props) {
    return (
        <div>
            <div className={styles.foldContainer}>
                <div className={styles.introductionContainer}>
                    <p className={styles.pageHead}>Welcome To Best Bank</p>
                    <p className={styles.introDescription}>At Best Bank, we take pride in being more than just a bank;
                    we are your dedicated financial partner on the journey to achieving your dreams.
                    With a commitment to excellence and a focus on your financial well-being,
                    we offer a comprehensive suite of services designed to meet your unique needs.</p>
                    <button className={styles.foldButton}>Get Free Loan Quote</button>
                </div>
            </div>
        </div>
    )
}