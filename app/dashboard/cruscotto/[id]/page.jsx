import { formatDate, formatNumber } from '@/app/lib/utility';
import styles from '@/app/ui/dashboard/cruscotto/SingolaPratica/singolaPratica.module.css';
import { fetchPratica_singola } from '@/app/lib/data';
import { updatePratica } from '@/app/lib/actions';
import SubmitButton from './submitButton';
const SinglePraticaPage = async ({params}) => {
    const {id} = params;
    const pratica = await fetchPratica_singola(id);
    console.log(pratica);
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <label>Pratica Numero</label>
                <h2>{pratica.numero_pratica}</h2>
                <label>Inserita il</label>
                <h2>{formatDate(pratica.createdAt)}</h2>
                <label>Stato</label>
                <h2>{pratica.stato}</h2>
                <label>Aggiornata al</label>
                <h2>{formatDate(pratica.updatedAt)}</h2>
            </div>
            <div className={styles.formContainer}>
                <form action={updatePratica} className={styles.form}>
                    <input type="hidden" name="id" value={pratica.id} />
                    <label>N° Pratica</label>
                    <input type="text" name="numero_pratica" placeholder={pratica.numero_pratica} />
                    <label>Cliente</label>
                    <input type="text" name="cliente" placeholder={pratica.cliente} readOnly />

                    <label>Fornitore</label>
                    <input type="text" name="fornitore" placeholder={pratica.fornitore} readOnly />

                    <label>Stato</label>
                    <select name="stato" id="stato">
                        <option value={pratica.stato}>{pratica.stato}</option>
                        <option value="attesa_firma">Attesa Firma</option>
                        <option value="attesa_esito">Attesa Esito</option>
                        <option value="bloccata">Bloccata</option>
                        <option value="contratto">Contratto</option>
                        <option value="completa">Completa</option>
                        <option value="deliberata">Deliberata</option>
                        <option value="istruttori_Interna">Istruttoria Interna</option>
                        <option value="in_consegna">In Consegna</option>
                        <option value="polizza_stipula">Polizza & Stipula</option>
                        <option value="rifiutata">Rifiutata</option>
                        <option value="trasmessa">Trasmessa</option>
                    </select>
                    <label>Mese</label>
                    <select name="mese" id="mese">
                        <option value={pratica.mese}>{pratica.mese}</option>
                        <option value="Gennaio">Gennaio</option>
                        <option value="Febbraio">Febbraio</option>
                        <option value="Marzo">Marzo</option>
                        <option value="Aprile">Aprile</option>
                        <option value="Maggio">Maggio</option>
                        <option value="Giugno">Giugno</option>
                        <option value="Luglio">Luglio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Settembre">Settembre</option>
                        <option value="Ottobre">Ottobre</option>
                        <option value="Novembre">Novembre</option>
                        <option value="Dicembre">Dicembre</option>
                    </select>
                    <label>Note</label>
                    <input type="textarea" name="note" id="note" rows="15" placeholder={pratica.note} />

                    <label>Importo</label>
                    <input type="number" name="importo" placeholder={formatNumber(pratica.importo)+' €'} />
                    <label>Provvigione</label>
                    <input type="text" name="provvigione" placeholder={pratica.provvigione} />

                    <label>Segnalatore</label>
                    <input type="text" name="segnalatore" placeholder={pratica.segnalatore} />
                    <SubmitButton />
                </form>
            </div>
        </div>
    )
}
export default SinglePraticaPage;