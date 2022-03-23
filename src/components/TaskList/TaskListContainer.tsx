import { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { SearchBar } from '../SearchBar';
import { TaskData } from '../Task/Task.types';
import { useDeleteTask, useEditTask } from './hooks';
import { TaskList } from './TaskList';

const initialTasks: { [key: string]: TaskData } = {
    '1': {
        id: '1',
        title: 'No Task So Far',
        description: 'your very first task will be to create a new task',
        status: 'todo',
        dueDate: '2020-01-01',
    },
};

export const TaskListContainer: React.FC = () => {
    const { tasks } = useContext(TasksContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [displayedTasks, setDisplayedTasks] = useState<TaskData[]>([]);

    useEffect(() => {
        const searchRegExp = new RegExp(searchTerm, 'i');
        const taskToDisplay = Object.values(
            tasks && Object.keys(tasks).length ? tasks : initialTasks
        ).filter((task) => task.title.search(searchRegExp) !== -1);
        setDisplayedTasks(taskToDisplay);
    }, [tasks, searchTerm]);

    const onDelete = useDeleteTask();
    const onEdit = useEditTask();

    return (
        <>
            <SearchBar onSearch={setSearchTerm} />
            <TaskList
                tasks={displayedTasks}
                onDelete={onDelete}
                onEdit={onEdit}
            />
        </>
    );
};
