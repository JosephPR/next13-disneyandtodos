import React from 'react';
import {Todo} from '../../typings';
import Link from 'next/link'
import styles from './[todoId]/todo.module.css'

const fetchTodos = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos"
    const res = await fetch(url);
    const todos: Todo[] = await res.json();
    // console.log(todos)
    return todos
}

export default async function TodosList() {
    const todos = await fetchTodos()
  return (
    <>
    {todos.map((todo) => (
        <p className={styles.inline} key={todo.id} >
            <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
    ))}
    </>
  )
}
