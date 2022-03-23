import React, { useEffect, useMemo } from 'react';
import { ITasksContext } from './TaskContext.types';
import { TasksContext } from './TasksContext';

export const TasksProvider: React.FC = ({ children }) => {
    const [tasks, setTasks] = React.useState<ITasksContext['tasks']>(null);
    const [editTask, setEditTask] = React.useState<string | null>(null);

    useEffect(() => {
        const taskFromStorage = localStorage.getItem('TASKS_FOR_BV');
        if (taskFromStorage) {
            const parsedTasks = JSON.parse(taskFromStorage);

            setTasks(Object.keys(taskFromStorage).length ? parsedTasks : null);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('TASKS_FOR_BV', JSON.stringify(tasks));
        setEditTask(null);
    }, [tasks]);

    const providerValue: ITasksContext = useMemo(() => {
        return {
            setTasks,
            tasks,
            setEditTask,
            editTask,
        };
    }, [tasks, editTask]);

    return (
        <TasksContext.Provider value={providerValue}>
            {children}
        </TasksContext.Provider>
    );
};
