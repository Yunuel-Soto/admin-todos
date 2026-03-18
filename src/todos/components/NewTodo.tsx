'use client';
import { FormEvent, useState } from 'react';
import styles from './todoItem.module.css';
import { IoTrashOutline } from "react-icons/io5";
// import * as todosApi from '../helpers/todos';
// import { useRouter } from 'next/navigation';
import { addTodo, deleteCompleted } from '../actions/todo-actions';

export const NewTodo = () => { 

    const [description, setDescription] = useState('');
    // const router = useRouter();

    const onSubmit = async(e: FormEvent) => {
        e.preventDefault();
        
        if(description.trim().length === 0) return;

        // const response = await todosApi.createTodo(description);
        await addTodo(description);

        setDescription('');

        // router.refresh();
    }

    // const deleteCompleted = async() => {
        // todosApi.deleteCompletedTodos(); 
        // router.refresh();
    // }

  return (
    <form onSubmit={onSubmit} className={`${styles.content_form}`}>

      <input type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={`${styles.input}`}
        placeholder="¿Qué necesita ser hecho?" />

      <button type='submit' id='submit' className={styles.button_submit}>
        Crear tarea
      </button>
      
      <span className='flex flex-1'></span>

      <button 
        onClick={ () => deleteCompleted() }
        type='button' className={styles.button_delete}>
        <IoTrashOutline />
        Borrar tarea
      </button>
    </form>
  )
}