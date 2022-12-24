import DisneyList from "./DisneyList";
import styles from './[disneyId]/disney.module.css'
export default function RootLayout({
    children
}) {
  return (
    <main className={styles.disneyList} >
        <div>
    <DisneyList />
        </div>
    <div> {children}</div>
    </main>
  );
}
