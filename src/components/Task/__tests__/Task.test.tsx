import { fireEvent, render, screen } from '@testing-library/react';
import { Task } from '../';
import { TaskData } from '../Task.types';

describe('<Task >', () => {
    const mockTask: TaskData = {
        id: '1',
        title: 'title',
        description: 'description',
        dueDate: '2020-01-01',
        status: 'open',
    };

    const mockOnDelete = jest.fn();
    const mockOnEdit = jest.fn();

    const { id, title, description, dueDate } = mockTask;

    it('should render the title', () => {
        render(<Task task={mockTask} onDelete={() => {}} />);
        const titleElement = screen.getByText(title);
        expect(titleElement).toBeInTheDocument();
    });

    it('should render the description', () => {
        render(<Task task={mockTask} onDelete={() => {}} />);
        const descriptionElement = screen.getByText(description as string);
        expect(descriptionElement).toBeInTheDocument();
    });

    it('should render the dueDate', () => {
        render(<Task task={mockTask} onDelete={() => {}} />);
        const dueDateElement = screen.getByText(`Due date: ${dueDate}`);
        expect(dueDateElement).toBeInTheDocument();
    });

    it('should call the delete callback onClick', () => {
        render(<Task task={mockTask} onDelete={mockOnDelete} />);
        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);
        expect(mockOnDelete).toHaveBeenNthCalledWith(1, id);
    });

    it('should call the edit callback onClick', () => {
        render(
            <Task task={mockTask} onDelete={() => {}} onEdit={mockOnEdit} />
        );
        const editButton = screen.getByText('Edit');
        fireEvent.click(editButton);
        expect(mockOnEdit).toHaveBeenNthCalledWith(1, id);
    });
});
