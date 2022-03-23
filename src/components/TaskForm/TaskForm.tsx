import React, { useState } from 'react';
import style from './TaskForm.module.css';
import { TaskFormProps } from './TaskForm.types';

export const TaskForm: React.FC<TaskFormProps> = ({ onSaveTask }) => {
    const todayDate = new Date().toISOString().slice(0, 10);

    const [dueDate, setDueDate] = useState(todayDate);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        onSaveTask({
            id: Date.now().toString(),
            title,
            description,
            dueDate,
            status: 'todo',
        });

        setTitle('');
        setDescription('');
        setDueDate(todayDate);
    };

    return (
        <div className={style.formwrapper}>
            <h2 className={style.header}>Add a new tasks here:</h2>
            <form name='taskform'>
                <input
                    className={style.title}
                    type='text'
                    id='title'
                    name='title'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className={style.description}
                    id='description'
                    name='description'
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className={style.bottom_bar}>
                    <label className={style.due_date}>
                        Due Date:
                        <input
                            className={style.due_date_input}
                            type='date'
                            id='dueDate'
                            name='dueDate'
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </label>
                    <button
                        type='submit'
                        onClick={onSubmit}
                        className={style.submit}
                    >
                        Create New Task
                    </button>
                </div>
            </form>
        </div>
    );
};