import React from 'react';
import style from './Task.module.css';
import { TaskProps } from './Task.types';

export const Task: React.FC<TaskProps> = ({ task, onDelete, onEdit }) => {
    const { id, title, description, dueDate } = task;

    const onClickDelete = () => {
        onDelete(id);
    };

    const onClickEdit = () => {
        onEdit && onEdit(id);
    };

    return (
        <article className={style.task}>
            <h3 className={style.header}>{title}</h3>
            <p className={style.body}>{description}</p>
            <p>{dueDate}</p>
            <div className={style.footer}>
                <span className={style.btn_delete} onClick={onClickDelete}>
                    Delete
                </span>
                <span className={style.btn_edit} onClick={onClickEdit}>
                    Edit
                </span>
            </div>
        </article>
    );
};
