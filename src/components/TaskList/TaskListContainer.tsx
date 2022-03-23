import { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { SearchBar } from '../SearchBar';
import { TaskData } from '../Task/Task.types';
import { TaskList } from './TaskList';

const fallbackTasks: { [key: string]: TaskData } = {
    '1': {
        id: '1',
        title: 'No Task So Far',
        description: 'your very first task will be to create a new task',
        status: 'todo',
        dueDate: '2020-01-01',
    },
};

export const TaskListContainer: React.FC = () => {
    const { tasks, setTasks } = useContext(TasksContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [displayedTasks, setDisplayedTasks] = useState<TaskData[]>([]);

    useEffect(() => {
        const searchRegExp = new RegExp(searchTerm, 'i');
        const taskToDisplay = Object.values(tasks || fallbackTasks).filter(
            (task) => task.title.search(searchRegExp) !== -1
        );
        setDisplayedTasks(taskToDisplay);
    }, [tasks, searchTerm]);

    const onDelete = (id: string) => {
        const newTasks = { ...tasks };
        delete newTasks[id];
        setTasks(newTasks);
    };

    return (
        <>
            <SearchBar onSearch={setSearchTerm} />
            <TaskList tasks={displayedTasks} onDelete={onDelete} />
        </>
    );
};
