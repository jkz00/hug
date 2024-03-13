"use client"
import { MdSearch } from "react-icons/md"
import styles from "./cerca.module.css"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

const Cerca = ({placeholder}) => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter();

    const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams);
        if(e.target.value){
            e.target.value.length > 2 && params.set("q", e.target.value)
        }
        else{
            params.delete("q")
        }
        replace(pathName + "?" + params.toString())
    },300);
    return(
        <div className={styles.container}>
            <MdSearch />
            <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch}/>
        </div>
    )
}

const GetMonth = () => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter();
    
const handleMonthSelect = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set("mese", e.target.value)
    replace(pathName + "?" + params.toString())

}
    return(
        <div>
            <select onChange={handleMonthSelect} defaultValue="">
                <option value="">SELEZIONA UN MESE</option>
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
        </div>
    )
}

export default Cerca
export {GetMonth}