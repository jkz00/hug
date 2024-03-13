import styles from '@/app/ui/dashboard/user/singleUser/singleUserPage.module.css';
import Image from 'next/image';
const SingleUserPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/logo.png" alt="" fill />
                </div>
                Marco Selmi
            </div>

            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Utente</label>
                    <input type="text" name="username" placeholder="mselmi" />
                    <label>Nome Cognome</label>
                    <input type="text" name="nome-cognome" placeholder="Marco Selmi" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="direzione@peacroma.it" />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Telefono</label>
                    <input type="phone" name="tel" placeholder="+39 3339917112" />
                    <label>Admin..?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Si</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Attivo..?</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Si</option>
                        <option value={false}>No</option>
                    </select>
                    <button className={styles.button}>Salva</button>
                </form>
            </div>
        </div>
    )
}
export default SingleUserPage;