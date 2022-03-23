import { TaskData } from '../Task/Task.types';

export type TaskListProps = {
    tasks: TaskData[];
    onDelete: (id: string) => void;
    onEdit?: (id: string) => void;
};
