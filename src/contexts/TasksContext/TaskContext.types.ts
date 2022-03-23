type Tasks = {
    [key: string]: {
        id: string;
        title: string;
        description: string;
        status: string;
        dueDate: string;
    };
};

export interface ITasksContext {
    setTasks: (arg: Tasks) => void;
    tasks: Tasks | null;
}
