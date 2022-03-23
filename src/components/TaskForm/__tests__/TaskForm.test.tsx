import { render, screen } from '@testing-library/react';
import { TaskForm } from '../';

describe('<TaskForm />', () => {
    it('should render the task form at all', () => {
        render(<TaskForm onSaveTask={() => {}} />);
        const headingElement = screen.getByText('Add a new tasks here:');
        expect(headingElement).toBeInTheDocument();
    });
});
