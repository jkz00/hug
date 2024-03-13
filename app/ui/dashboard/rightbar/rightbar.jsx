import { MdArrowForward, MdNotifications } from 'react-icons/md';
import styles from './rightbar.module.css';
import Image from 'next/image';
const rightBar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
                </div>
                <div className={styles.texts}>
                    <div>
                    <MdNotifications />
                    <span className={styles.notification}>Hai una nuova Notifica</span>
                    <h3 className={styles.title}>Una pratica necessità del tuo intervento</h3>
                    <span className={styles.subtitle}>Pratica: 2024-36 Stato: Attesa Firma</span>
                    <p className={styles.description}>
                        La pratica 2024-36 è in attesa di firma da parte del cliente. Contatta il cliente per la firma.
                    </p>
                    <button className={styles.button}>
                        <MdArrowForward />
                        Vai alla pratica
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default rightBar;