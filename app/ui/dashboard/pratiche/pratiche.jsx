import { fetchLastPratiche, } from '@/app/lib/data';
import styles from './pratiche.module.css';
import { formatNumber } from '@/app/lib/utility';
import Link from 'next/link';

const Pratiche = async () => {
    let pratica = await fetchLastPratiche();
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
            <div className={styles.container}>
            <h2 className={styles.title}>Ultimi Utenti inseriti</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Id utente</td>
                        <td>Username</td>
                        <td>Segnalatore</td>
                        <td>Subscription</td>
                        <td>Importo subscription</td>
                    </tr>
                </thead>
                <tbody>
                {pratica.map((pratica) => (
                    <tr key={pratica.id}>
                        <td><Link href={`/dashboard/cruscotto/${pratica.id}`}>{pratica.numero_pratica}</Link></td>
                        <td><Link href={`/dashboard/cruscotto/${pratica.id}`}>{pratica.cliente}</Link></td>
                        <td>{pratica.fornitore}</td>
                        <td>
                            <span className={`${styles.status} ${statusToClass[pratica.stato] || ''}`}>{pratica.stato}</span>
                        </td>
                        <td>
                            <div className={styles.tooltip_container}>
                                {pratica.note.slice(0, 8)}{pratica.note.length > 10 ? '...' : ''}
                                <span className={styles.tooltip_text}>{pratica.note}</span>
                            </div>
                        </td>
                        <td>{formatNumber(pratica.importo)+'€'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}
export default Pratiche;