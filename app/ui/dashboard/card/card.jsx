import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';
const Card = () => {
    return(
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} /> 
            <div className={styles.texts}>
                <span className={styles.title}>Totale Utenti</span>
                <span className={styles.number}>34 (place holder)</span>
                <span className={styles.details}>
                    <span className={styles.negative}>5</span> utenti bloccati 
                </span>
            </div>
        </div>
    )
}
export default Card;