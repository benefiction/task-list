import React from 'react';
import { Task } from '../Task';
import style from './TaskList.module.css';
import { TaskListProps } from './TaskList.types';

export const TaskList: React.FC<TaskListProps> = ({
    tasks,
    onDelete,
    onEdit,
}) => {
    return (
        <ul className={style.tasklist}>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task task={task} onDelete={onDelete} onEdit={onEdit} />
                </li>
            ))}
        </ul>
    );
};
