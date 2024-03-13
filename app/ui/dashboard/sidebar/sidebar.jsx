import Image from 'next/image'
import MenuLink from './menuLink/menuLink'
import styles from './sidebar.module.css'
import { MdDashboard, MdPeople, MdSettings, MdEditDocument, MdHelpCenter, MdAnalytics, MdLogout, MdPlusOne } from 'react-icons/md'
import { auth, signOut } from '@/app/auth'
const menuItems = [
    { 
    title: 'Pagine',
    list: [
        {
            title: 'Dashboard',
            path: '/dashboard',
            icon: <MdDashboard />
        },
        {
            title: 'Cruscotto Clienti',
            path: '/dashboard/cruscotto',
            icon: <MdEditDocument />
        },
        {
            title: 'Aggiungi Cliente',
            path: '/dashboard/cruscotto/aggiungi',
            icon: <MdEditDocument />
        },
    ]},
    { 
        title: 'Utenti',
        list: [
            {
                title: 'Utenti',
                path: '/dashboard/users',
                icon: <MdPeople />
            },
            {
                title: 'Aggiungi Utente',
                path: '/dashboard/users/add',
                icon: <MdPlusOne />
            },
        ]},
    { 
        title: 'Analitiche',
        list: [
            {
                title: 'Report',
                path: '/report',
                icon: <MdAnalytics />
            },
        ]},
    {
    title: 'Utenti',
    list: [
        {
            title: 'Profilo',
            path: '/profile',
            icon: <MdPeople />
        },
        {
            title: 'Impostazioni',
            path: '/settings',
            icon: <MdSettings />
        },
        {
            title: 'Aiuto',
            path: '/dashboard/help',
            icon: <MdHelpCenter />
        },
    ]
    } 
]

const Sidebar = async () => {

    const {user} = await auth();
    console.log(user)
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                    <Image className={styles.userImage} src={user.img || "/logo.png"} width={50} height={50} alt=''/>
                <div className={styles.userDetails}>
                    <span className={styles.userName}>{user.username}</span> 
                    <span className={styles.userRole}>Admin</span> 
                </div>
            </div>
            <ul className={styles.list}>
            {menuItems.map(cat=>(
                <li key={cat.title}>
                    <span className={styles.cat}>{cat.title}</span>
                    {cat.list.map(item=>(
                        <MenuLink item={item} key={item.title}/>
                    ))}

                </li>
            ))}
            </ul>
            <form action={async () => {
                "use server"
                await signOut()
            }}>
            <button className={styles.logout}>
                <MdLogout size={20} />
                Logout
            </button>
            </form>
            </div>
    )
}

export default Sidebar