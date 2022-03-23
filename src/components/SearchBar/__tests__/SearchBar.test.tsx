import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from '../';

describe('<SearchBar />', () => {
    const mockOnChange = jest.fn();

    it('should render the search field', () => {
        render(<SearchBar onSearch={() => {}} />);
        const titleElement = screen.getByPlaceholderText('Search');
        expect(titleElement).toBeInTheDocument();
    });

    it('should call the onChange callback onchange', () => {
        const serachTrem = 'aa';
        render(<SearchBar onSearch={mockOnChange} />);
        const editInput = screen.getByPlaceholderText('Search');
        fireEvent.change(editInput, { target: { value: serachTrem } });
        expect(mockOnChange).toHaveBeenNthCalledWith(1, serachTrem);
    });
});
