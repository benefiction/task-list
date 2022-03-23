export type TaskProps = {
    task: TaskData;
    onDelete: (arg1: string) => void;
    onEdit?: (arg1: string) => void;
};

export type TaskData = {
    id: string;
    title: string;
    description: string;
    status: string;
    dueDate: string;
};
