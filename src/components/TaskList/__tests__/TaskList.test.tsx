import { render, screen } from '@testing-library/react';
import { TaskList } from '..';
import { TaskData } from '../../Task/Task.types';

describe('<TaskList />', () => {
    const mockTasks: TaskData[] = [
        {
            id: '1',
            title: 'Task 1',
            description: 'Task 1 description',
            status: 'todo',
            dueDate: '2020-01-01',
        },
        {
            id: '2',
            title: 'Task 2',
            description: 'Task 2 description',
            status: 'todo',
            dueDate: '2020-01-01',
        },
    ];

    test('should render all tasks within the tasklist', () => {
        render(<TaskList tasks={mockTasks} onDelete={() => {}} />);
        const taskListEntrys = screen.getAllByRole('listitem');
        expect(taskListEntrys).toHaveLength(mockTasks.length);
    });
});
