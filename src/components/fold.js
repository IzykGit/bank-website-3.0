import styles from '../styles/components/fold.module.css'

export default function Fold({ headText, introDescription, buttonText }) {
    return (
        <div>
            <div className={styles.foldContainer}>
                <div data-aos="fade-right" className={styles.introductionContainer}>
                    <p className={styles.pageHead}>{headText}</p>
                    <p className={styles.introDescription}>{introDescription}</p>
                    <button className={styles.foldButton}>{buttonText}</button>
                </div>
            </div>
        </div>
    )
}