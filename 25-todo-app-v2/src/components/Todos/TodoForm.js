import { useState } from 'react';

import styles from './TodoForm.module.css';

import Button from '../UI/Button';


function TodoForm({ addTodo }) {

    const [text, setText] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();// Запрет браузер переходить на новую страницу
        addTodo(text);
        setText('');
    };

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input
                    placeholder="Enter new todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
                <Button type="submite" title="Submite">Submite</Button>
            </form>
        </div>
    );
}
export default TodoForm;