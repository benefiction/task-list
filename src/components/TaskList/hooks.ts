import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';

export const useDeleteTask = () => {
    const { tasks, setTasks } = useContext(TasksContext);
    return (id: string) => {
        const newTasks = { ...tasks };
        delete newTasks[id];
        setTasks(newTasks);
    };
};

export const useEditTask = () => {
    const { setEditTask } = useContext(TasksContext);
    return (id: string) => {
        setEditTask(id);
        const element = document.getElementById('root');
        element && element.scrollIntoView(false);
    };
};
