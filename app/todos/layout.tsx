import TodosList from './TodosList';
import styles from './[todoId]/todo.module.css'

export default function RootLayout({
    children,
}: {
    children:React.ReactNode;
}) {
  return (
    <main className={styles.todoList}>
        <div>
    {/* @ts-ignore */}
    <TodosList />
        </div>
    <div className={styles.todoListChildren}> {children}</div>
    </main>
  );
}
