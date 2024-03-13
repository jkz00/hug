import Cerca from '@/app/ui/dashboard/cerca/cerca';
import styles from '@/app/ui/dashboard/user/users.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import { fetchUsers } from '@/app/lib/data';

const UsersPage = async ({searchParams}) => {
    const q = searchParams?.q || "";
    const utenti = await fetchUsers(q);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Cerca placeholder={"Cerca Utente..."} />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Aggiungi nuovo utente</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Utente</td>
                        <td>Nome Cognome</td>
                        <td>Email</td>
                        <td>Creato il</td>
                        <td>Telefono</td>
                        <td>Ruolo</td>
                        <td>Stato</td>
                        <td>Azioni</td>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td>

                        </td>
                        <td>
                                Francesco De Gennaro
                        </td>
                        <td>francesco@gmail.com</td>
                        <td>01/01/2024</td>
                        <td>+39 3333333333</td>
                        <td>Admin</td>
                        <td>Attivo</td>
                        <td>
                            <div className={styles.buttons}>
                            
                                <button className={`${styles.button} ${styles.view}`}>Modifica</button>
                            <button className={`${styles.button} ${styles.delete}`}>Elimina</button>
                            </div> 
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )

}
export default UsersPage;