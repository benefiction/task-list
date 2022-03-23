import React from 'react';
import { ITasksContext } from './TaskContext.types';

export const TasksContext = React.createContext<ITasksContext>({
    setTasks: () => null,
    tasks: null,
    setEditTask: () => null,
    editTask: null,
});
