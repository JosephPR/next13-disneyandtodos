import styles from "./layout.module.css";
import Link from "next/link";
import { Exo } from '@next/font/google'
import './globals.css'
import Pagination from '../components/Pagination'
import Head from './head.js'

const robo = Exo({
  weight:['400','700']
})

export default function Layout({ children }: { children: any }) {
  return (
    <html className={robo.className} lang="en">
     <Head />
      <body>
        <div className={styles.header}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/disney">Disney</Link>
            </li>
          
            <li>
              <Link href="/todos">Todos</Link>
            </li>
          
          </ul>
        </div>
        <div className={styles.children}>
        <Pagination />
        <br/>
          {children}
          
          </div>
       
      </body>
    </html>
  );
}
