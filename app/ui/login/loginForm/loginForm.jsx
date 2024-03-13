"use client"
import { authenticate } from '@/app/lib/actions';
import styles from './loginForm.module.css';
import { useFormState } from 'react-dom';
import Image from 'next/image'
const LoginForm = () => {
    const [state, formAction] = useFormState(authenticate, undefined); 
    
    return (
        <div className={styles.container}>
        <Image src="/bg.png" alt="background" width='1920' height='1080' />
        <form action={formAction} className={styles.form}>
        <Image src="/logo.png" alt="logo" width="150" height="50" />
            <h2>Effettua L&apos;accesso</h2>
          <input type="text" placeholder="Username" name="username" />
          <input type="password" placeholder="Password"  name="password"/>
          <button type="submit">Login</button>
          <p className={styles.error}>{state && state}</p>
        </form>
        </div>
    )
}
export default LoginForm