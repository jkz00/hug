import { addPratica } from '@/app/lib/actions';
import styles from '@/app/ui/dashboard/cruscotto/aggiungiPratica/aggiungi.module.css';
import SubmitButton from './submitButton';
const AggiungiPratica = () => {
    return(
        <div className={styles.container}>
            <div className={styles.title}><h2>Aggiungi Nuova Utente</h2></div>
            <form action={addPratica} className={styles.form}>
                <input type="text" placeholder="id Utente" name="numero_pratica" />
                <input type="text" placeholder="Utente" name="cliente" required />
                <input type="text" placeholder="Segnalatore" name="fornitore" required />
                <select name="stato" id="stato">
                    <option value="general">abbonamento1</option>
                    <option value="attesa_firma">Abbonamento 2</option>
                    <option value="attesa_esito">Abbonamento3</option>
                </select>
                <input type="text" placeholder="Segnalatore" name="segnalatore" />
                <SubmitButton />
            </form>
        </div>
    )
}
export default AggiungiPratica;