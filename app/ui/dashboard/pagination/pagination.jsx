import styles from './pagination.module.css'
const Pagination = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button} disabled>Indietro</button>
            <button className={styles.button}>Avanti</button>
        </div>
    )
}
export default Pagination