'use client';
import styles from '@/app/ui/dashboard/cruscotto/aggiungiPratica/aggiungi.module.css';
import { useFormStatus } from 'react-dom';
export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.button}disabled={pending}>
      {pending ? "Salvataggio..." : "Salva"}
    </button>
  );
}