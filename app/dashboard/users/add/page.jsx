import { addUser } from '@/app/lib/actions';
import styles from '@/app/ui/dashboard/user/aggiungiUtente.module.css';

const AggiungiUtente = () => {
    return(
        <div className={styles.container}>
            <div className={styles.title}><h2>Aggiungi Nuovo utente</h2></div>
            <form action={addUser} className={styles.form}>
                <input type="text" placeholder="Nome Utente" name="username" required />
                <input type="text" placeholder="Nome Cognome" name="nome_cognome" required />
                <select name="isAdmin" id="isAdmin">
                    <option value={false} >è Admin ?</option>
                    <option value={true}>Si</option>
                    <option value={false}>No</option>
                </select>
                <input type="email" placeholder="Email" name="email" required />
                <input type="password" placeholder="Password" name="password" required />
                <input type="phone" placeholder="Telefono" name="tel"  />
                <select name="isActive" id="isActive">
                    <option value={true}>Attivo?</option>
                    <option value={true}>Si</option>
                    <option value={false}>No</option>
                </select>
                <button type='submit' className={styles.button}>
                    <span>Aggiungi</span>
                </button>
            </form>
        </div>
    )
}
export default AggiungiUtente;