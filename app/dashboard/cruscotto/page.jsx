import Cerca, { GetMonth } from "@/app/ui/dashboard/cerca/cerca"
import styles from "@/app/ui/dashboard/cruscotto/cruscotto.module.css"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Link from "next/link"
import { fetchPratica } from "@/app/lib/data"
import { formatDate } from "@/app/lib/utility"
import { formatNumber } from "@/app/lib/utility"
import { deletePratica } from "@/app/lib/actions"


const CruscottoPage = async ({searchParams}) => {
    const q = searchParams?.q || "";
    const mese = searchParams?.mese || "";
    const pratica = await fetchPratica(q, mese);
    const statusToClass = {
        'bloccata': styles.bloccata,
        'trasmessa': styles.trasmessa,
        'contratto': styles.contratto,
        'rifiutata': styles.rifiutata,
        'completa' : styles.completa,
        'attesa_firma' : styles.attesa_firma,
        'attesa_esito' : styles.attesa_esito,
        'deliberata' : styles.deliberata,
        'istruttoria_interna': styles.istruttoria_interna,
        'in_consegna' : styles.in_consegna,
        'attesa_DDT_Fattura' : styles.attesa_DDT_Fattura,
        'insoluto' : styles.insoluto
    }
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <Cerca placeholder="Cerca una pratica"/>
                <GetMonth />
                <Link href="/dashboard/cruscotto/aggiungi">
                <button className={styles.addButton}>Nuova Utente</button>
                </Link>
            </div>
            <h2 className={styles.title}>Cruscotto Generale {mese ? mese : ""}</h2>
            <table className={styles.table}>
                <thead></thead>
                    <tr>
                        <td>ID Utente</td>
                        <td>Utente</td>
                        <td>Segnalatore</td>
                        <td>Tipologia Abbonamento</td>
                        <td>Note</td>
                        <td>Importo</td>
                        <td>Azioni</td>
                    </tr>
                <tbody>
                    <tr>
                        <td>hg11292</td>
                        <td>username utente</td>
                        <td>segnalatore</td>
                        <td>Abbonamento 1</td>
                        <td> </td>
                        <td>{formatNumber(pratica.importo)+'€'}</td>
                        <td>
                        <div className={styles.buttons}>
                            <Link href={`/dashboard/cruscotto/${pratica.id}`}>  
                                <button className={`${styles.button} ${styles.view}`}>Visualizza</button>
                            </Link>
                            <form action={deletePratica}>
                                <input type="hidden" name="id" value={pratica.id} />
                            <button className={`${styles.button} ${styles.delete}`}>Elimina</button>
                            </form>
                            </div>
                        </td> 
                    </tr>
                    
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}
export default CruscottoPage