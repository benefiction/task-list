import React, { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { TaskData } from '../Task/Task.types';
import { TaskForm } from './TaskForm';

export const TaskFormContainer: React.FC = () => {
    const { tasks, setTasks } = useContext(TasksContext);

    const onSaveTask = (task: TaskData) => {
        const newTasks = { ...tasks, [task.id]: task };
        setTasks(newTasks);
    };

    return <TaskForm onSaveTask={onSaveTask} />;
};
