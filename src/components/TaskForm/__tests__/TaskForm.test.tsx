import { fireEvent, render, screen } from '@testing-library/react';
import { TaskForm } from '../';
import { TaskData } from '../../Task/Task.types';

describe('<TaskForm />', () => {
    it('should render the task form at all', () => {
        render(<TaskForm onSaveTask={() => {}} />);
        const headingElement = screen.getByText('Add a new tasks here:');
        expect(headingElement).toBeInTheDocument();
    });

    it('saveButton should be disabled by default', () => {
        const mockOnSaveTask = jest.fn();
        render(<TaskForm onSaveTask={mockOnSaveTask} />);
        const saveButton = screen.getByRole('button');
        expect(saveButton).toHaveAttribute('disabled');
    });

    it('should call the onSaveTask callback', () => {
        const mockOnSaveTask = jest.fn();

        const mockTask: TaskData = {
            description: 'description',
            dueDate: '2022-03-23',
            id: '1648063738687',
            status: 'todo',
            title: 'title',
        };
        render(
            <TaskForm onSaveTask={mockOnSaveTask} prefilledTask={mockTask} />
        );

        const saveButton = screen.getByRole('button');
        fireEvent.click(saveButton);

        expect(mockOnSaveTask).toHaveBeenCalledWith(mockTask);
    });
});
